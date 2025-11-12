# 🎬 Visual Walkthrough - Complete Node Editing System

## Scenario: Editing a Contact JSON

### Starting JSON:
```json
{
  "contact": {
    "name": "John Doe",
    "email": "john@example.com",
    "age": 30,
    "active": true
  }
}
```

---

## 📍 Method 1: Hover-Based Quick Edit

### Step 1: Hover Over Node
```
Visualization Panel:
┌──────────────────────┐
│  {contact}           │
│                      │
│    ├─ {name: "John"} ← HOVER HERE
│    │
│    └─ {email: "..."}
```

### Step 2: Edit Button Appears
```
┌──────────────────────┐
│  "John" ✎  ← Edit button appears on hover
└──────────────────────┘
```

### Step 3: Click Edit Button
```
Edit Mode Activated:
┌────────────────────┐
│  [Input Field]     │
│   "John"           │
│                    │
│  [✕] [✓]           │ ← Cancel (grey/red) and Save (green)
└────────────────────┘
```

### Step 4: Enter New Value
```
┌────────────────────┐
│  [Input Field]     │
│   "Jane"           │ ← User typed "Jane"
│                    │
│  [✕] [✓]           │
└────────────────────┘
```

### Step 5: Press Enter or Click Save
```
Changes Applied:
• Visualization updates: "John" → "Jane"
• Editor pane updates: "name": "Jane"
• Both panels sync automatically
```

---

## 📍 Method 2: Modal-Based Detailed Edit

### Step 1: Click on Node
```
Visualization Panel - Click anywhere on the contact node
↓
NodeModal pops up showing:
┌─────────────────────────────┐
│ Content              X       │
│                             │
│ {                           │
│   "name": "John Doe",       │
│   "email": "john@ex...",    │
│   "age": 30,                │
│   "active": true            │
│ }                           │
│                             │
│  [    Edit Button     ]      │ ← Blue, light variant
└─────────────────────────────┘
```

### Step 2: Click Edit Button
```
Edit Mode Activated:
┌─────────────────────────────┐
│ Content              X       │
│                             │
│ ┌─────────────────────────┐ │
│ │ {                       │ │  ← Now editable textarea
│ │   "name": "John Doe",   │ │     (monospace font)
│ │   "email": "john@ex...", │ │
│ │   "age": 30,            │ │
│ │   "active": true        │ │
│ │ }                       │ │
│ └─────────────────────────┘ │
│                             │
│ [Cancel Button]  [Save Button] │
│  (Grey/Default)   (Green)      │
└─────────────────────────────┘
```

### Step 3: Edit Multiple Values
```
User changes content to:
┌─────────────────────────────┐
│ ┌─────────────────────────┐ │
│ │ {                       │ │
│ │   "name": "Jane Smith", │ │ ← Changed name
│ │   "email": "jane@ex...", │ │ ← Changed email
│ │   "age": 31,            │ │ ← Changed age
│ │   "active": false       │ │ ← Changed status
│ │ }                       │ │
│ └─────────────────────────┘ │
│                             │
│ [Cancel Button]  [Save Button] │
└─────────────────────────────┘
```

### Step 4: Click Save (Green Button)
```
System Actions:
1. Validates JSON format
2. If valid: Updates node data
3. Closes edit mode
4. Updates visualization
5. Syncs with editor pane

Result:
✓ All changes applied
✓ Visualization updated
✓ Editor pane updated
✓ Modal shows confirmation
```

### Step 5: Or Click Cancel (Grey Button)
```
Cancel Action:
1. Discards all changes
2. Returns to view mode
3. Original data preserved
4. Modal still open showing original content

You can:
• Edit again (click Edit button)
• Close modal (click X)
• Review JSON Path below
```

---

## 🔄 Real-Time Updates After Save

### Before Edit:
```
Visualization:          Editor Pane:
{contact}               {
  ├─ name: "John" ─────  "contact": {
  ├─ email: "john..."  │   "name": "John Doe",
  ├─ age: 30           │   "email": "john@...",
  └─ active: true      │   "age": 30,
                        │   "active": true
                        │ }
```

### After Edit & Save:
```
Visualization:          Editor Pane:
{contact}               {
  ├─ name: "Jane" ─────  "contact": {
  ├─ email: "jane..." │   "name": "Jane Smith",
  ├─ age: 31         │   "email": "jane@...",
  └─ active: false    │   "age": 31,
                       │   "active": false
                       │ }
```

**Both panels sync instantly!** ✨

---

## ⚡ Keyboard Shortcuts

### Hover-Based Editing:
```
While in edit mode:
• Enter  → Save changes
• Escape → Cancel and revert
```

### Modal Editing:
```
While in edit mode:
• Use standard text editing keys
• Tab to move between elements
• Click Save or Cancel buttons
```

---

## ✨ Interactive Elements

### Edit Button
```
Normal Mode: [    Edit    ] ← Blue, light background
             (Click to enter edit mode)

Hover Mode:  [    Edit    ] ← Slightly darker on hover
```

### Save Button
```
Edit Mode:  [    Save    ] ← Green background
             (Click to save changes and validate JSON)

Hover:      [    Save    ] ← Darker green on hover
             (Indicates save action)
```

### Cancel Button
```
Edit Mode:  [   Cancel   ] ← Grey/default background
             (Click to discard changes)

Hover:      [   Cancel   ] ← Darker grey on hover
             (Indicates cancel action)
```

---

## 🎯 When to Use Each Method

### Use Hover-Based Editing When:
```
✓ Changing a single value quickly
✓ Making small edits
✓ Working with simple types (string, number, boolean)
✓ Quick in-and-out edits
✓ No validation needed (type conversion is automatic)
```

### Use Modal Editing When:
```
✓ Editing multiple values in one node
✓ Complex JSON structures
✓ Want to see full node content
✓ Need JSON validation
✓ Making bulk changes
✓ Want dedicated edit interface
✓ Reviewing content before saving
```

---

## 🛡️ Error Handling

### Invalid JSON in Modal:
```
User enters:
{
  "name": "Jane,  ← Missing closing quote
  "age": 31
}

Then clicks Save →

Alert appears:
┌─────────────────────────────┐
│ ⚠️ Invalid JSON format.      │
│ Please check your input.    │
│                             │
│ [OK]                        │
└─────────────────────────────┘

Modal stays open with content preserved
User can fix and try again
```

### Valid JSON Saved:
```
User clicks Save with valid JSON ↓

System validates ✓
Changes applied ✓
Visualization updates ✓
Editor syncs ✓
Modal shows original content view ✓
```

---

## 💡 Tips & Tricks

### Tip 1: Check JSON Path
```
At the bottom of NodeModal:
JSON Path: $["contact"]["name"]
           ↑ Shows exactly where in JSON this value is
```

### Tip 2: Copy JSON Content
```
In view mode, click the copy icon next to content
Copies the formatted JSON to clipboard
```

### Tip 3: Quick Cancel
```
In hover-based editing:
• Press Escape key to instantly cancel
• Original value preserved
```

### Tip 4: Bulk Edit
```
In modal edit mode:
• Edit entire object at once
• Change multiple properties in one save
• Instant sync with all panels
```

---

## 📊 Feature Comparison Table

| Aspect | Hover Edit | Modal Edit |
|--------|-----------|-----------|
| **Open Time** | Instant (hover) | Quick (1 click) |
| **Scope** | One value | Entire node |
| **Validation** | Auto type convert | JSON validation |
| **Edit Speed** | ⚡ Very fast | ⏱️ Standard |
| **UI Complexity** | Minimal | Full featured |
| **Keyboard** | Enter/Escape | Standard keys |
| **Error Feedback** | Automatic | User alert |
| **Use Case** | Quick fixes | Detailed edits |

---

**Ready to start editing?** 🚀

Open the app (`pnpm dev`) and try both methods!
