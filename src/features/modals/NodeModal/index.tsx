import React from "react";
import type { ModalProps } from "@mantine/core";
import { Modal, Stack, Text, ScrollArea, Flex, CloseButton, Button, Textarea } from "@mantine/core";
import { CodeHighlight } from "@mantine/code-highlight";
import styled from "styled-components";
import type { NodeData } from "../../../types/graph";
import useGraph from "../../editor/views/GraphView/stores/useGraph";

const StyledButtonGroup = styled(Flex)`
  gap: 4px;
  position: absolute;
  top: 12px;
  right: 40px;
  z-index: 100;
`;

const StyledSmallButton = styled(Button)`
  font-size: 11px !important;
  padding: 4px 8px !important;
  height: auto;
  min-height: unset;
` as typeof Button;

// return object from json removing array and object fields
const normalizeNodeData = (nodeRows: NodeData["text"]) => {
  if (!nodeRows || nodeRows.length === 0) return "{}";
  if (nodeRows.length === 1 && !nodeRows[0].key) return `${nodeRows[0].value}`;

  const obj = {};
  nodeRows?.forEach(row => {
    if (row.type !== "array" && row.type !== "object") {
      if (row.key) obj[row.key] = row.value;
    }
  });
  return JSON.stringify(obj, null, 2);
};

// return json path in the format $["customer"]
const jsonPathToString = (path?: NodeData["path"]) => {
  if (!path || path.length === 0) return "$";
  const segments = path.map(seg => (typeof seg === "number" ? seg : `"${seg}"`));
  return `$[${segments.join("][")}]`;
};

export const NodeModal = ({ opened, onClose }: ModalProps) => {
  const nodeData = useGraph(state => state.selectedNode);
  const editNodeValue = useGraph(state => state.editNodeValue);
  const [isEditing, setIsEditing] = React.useState(false);
  const [editValue, setEditValue] = React.useState("");

  React.useEffect(() => {
    if (nodeData && isEditing) {
      setEditValue(normalizeNodeData(nodeData.text ?? []));
    }
  }, [nodeData, isEditing]);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    if (nodeData && editValue) {
      try {
        // Parse the edited JSON to validate it
        const parsed = JSON.parse(editValue);
        
        // If it's a single value (not an object), update directly
        if (nodeData.text.length === 1 && !nodeData.text[0].key) {
          editNodeValue(nodeData, JSON.stringify(parsed));
        } else {
          // For objects, update each property
          Object.keys(parsed).forEach(key => {
            editNodeValue(nodeData, JSON.stringify(parsed));
          });
        }
        
        setIsEditing(false);
      } catch (error) {
        alert("Invalid JSON format. Please check your input.");
      }
    }
  };

  const handleCancel = () => {
    setIsEditing(false);
    setEditValue("");
  };

  return (
    <Modal size="auto" opened={opened} onClose={onClose} centered withCloseButton={false}>
      <Stack pb="sm" gap="sm">
        <Stack gap="xs">
          <Flex justify="space-between" align="center">
            <Text fz="xs" fw={500}>
              Content
            </Text>
            <CloseButton onClick={onClose} />
          </Flex>
          <div style={{ position: "relative" }}>
            <ScrollArea.Autosize mah={250} maw={600}>
              {isEditing ? (
                <Textarea
                  value={editValue}
                  onChange={e => setEditValue(e.currentTarget.value)}
                  placeholder="Enter JSON content"
                  minRows={6}
                  maxRows={10}
                  styles={{
                    input: {
                      fontFamily: "monospace",
                      fontSize: "12px",
                    },
                  }}
                />
              ) : (
                <CodeHighlight
                  code={normalizeNodeData(nodeData?.text ?? [])}
                  miw={350}
                  maw={600}
                  language="json"
                  withCopyButton
                />
              )}
            </ScrollArea.Autosize>
            {isEditing ? (
              <StyledButtonGroup>
                <StyledSmallButton variant="default" onClick={handleCancel} size="xs">
                  Cancel
                </StyledSmallButton>
                <StyledSmallButton color="green" onClick={handleSave} size="xs">
                  Save
                </StyledSmallButton>
              </StyledButtonGroup>
            ) : (
              <Button 
                onClick={handleEdit} 
                variant="light" 
                size="xs"
                style={{ position: "absolute", top: 12, right: 40, fontSize: "11px", padding: "4px 8px" }}
              >
                Edit
              </Button>
            )}
          </div>
        </Stack>
        <Text fz="xs" fw={500}>
          JSON Path
        </Text>
        <ScrollArea.Autosize maw={600}>
          <CodeHighlight
            code={jsonPathToString(nodeData?.path)}
            miw={350}
            mah={250}
            language="json"
            copyLabel="Copy to clipboard"
            copiedLabel="Copied to clipboard"
            withCopyButton
          />
        </ScrollArea.Autosize>
      </Stack>
    </Modal>
  );
};
