# Quick Start Guide - Node Value Editing Feature

## Installation & Running

```bash
# 1. Install pnpm (if not already installed)
npm install -g pnpm@latest-10

# 2. Install dependencies
cd /path/to/jsoncrack.com
pnpm install

# 3. Start development server
pnpm dev
```

The app will start at `http://localhost:3000`

## Using the Edit Feature

### Editing a Simple Value (TextNode)

1. **Load a JSON** with text values (strings, numbers, booleans)
2. **Hover over a value node** in the visualization - an edit button (✎) appears
3. **Click the edit button**
4. **Type your new value** in the input field
5. **Save your change** by either:
   - Pressing **Enter** key
   - Clicking the green **Save** button
6. **See the change** instantly in both:
   - The visualization (node value updates)
   - The left editor pane (JSON updates)

### Editing Object Properties (ObjectNode)

1. **Find an object node** displaying multiple properties
2. **Hover over a property value** - edit button (✎) appears
3. **Click the edit button** for that specific property
4. **Edit the value** in the compact input
5. **Save** with **Enter** or click **✓**
6. **Cancel** with **Escape** or click **✕**

### Keyboard Shortcuts

| Shortcut | Action |
|----------|--------|
| **Enter** | Save the edited value |
| **Escape** | Cancel editing and revert |

### Type Conversions

The editor intelligently handles value types:

```
"123" → 123              (string to number)
123 → "123"              (number to string)
"true" → true            (string to boolean)
"{"key":"val"}" → {...}  (string to object)
```

## Visual Guide

```
Before Edit:
┌─────────────────┐
│  "Hello World"  │  ← Hover here
└─────────────────┘

After Hovering:
┌──────────────────────┐
│ "Hello World"    ✎ │  ← Edit button appears
└──────────────────────┘

In Edit Mode:
┌──────────────────────┐
│ [Input field]        │
│ [✕ Cancel] [✓ Save] │
└──────────────────────┘
```

## Features

✅ **Real-time Sync** - Changes appear in editor immediately
✅ **Keyboard Support** - Full keyboard control
✅ **Type Aware** - Automatic type conversion
✅ **Safe** - Cancel any edit without saving
✅ **Visual** - Clear hover states and buttons
✅ **Fast** - Optimized performance
✅ **Themed** - Works in light and dark modes

## Troubleshooting

### Edit button not showing?
- Make sure you're hovering over the actual value
- Try clicking in the middle of the node
- Check browser console for errors

### Changes not saving?
- Verify you see the JSON update in the left editor
- Check browser console for error messages
- Try refreshing the page

### Lost an edit?
- If you pressed Escape or clicked Cancel, the original value is kept
- The editor pane always reflects the current state

## Example: Editing a Contact

**Original JSON:**
```json
{
  "contacts": [
    {
      "name": "John",
      "age": 30,
      "active": true
    }
  ]
}
```

**Steps to edit:**
1. Click visualization node showing the contact object
2. Hover over "John" value → click ✎
3. Change to "Jane" → press Enter
4. Hover over "30" → click ✎
5. Change to "31" → press Enter
6. Hover over "true" → click ✎
7. Change to "false" → press Enter

**Updated JSON:**
```json
{
  "contacts": [
    {
      "name": "Jane",      ← Changed
      "age": 31,           ← Changed
      "active": false      ← Changed
    }
  ]
}
```

## What You Can't Edit

❌ Object structure `{...}` - Read-only
❌ Array structure `[...]` - Read-only
❌ Add/remove properties - Not supported yet
❌ Reorder items - Not supported yet

These are potential future enhancements!

## Performance Tips

- Works best with JSON files under 50KB
- Large JSON files (>100KB) may be slower
- Edit feature has minimal performance impact

## Next Steps

1. ✅ Load some JSON and try editing values
2. ✅ Check both visualization and editor pane
3. ✅ Try different value types (strings, numbers, etc.)
4. ✅ Use keyboard shortcuts
5. ✅ Report any issues or suggestions

## Need Help?

Refer to the detailed guides:
- **FEATURE_IMPLEMENTATION.md** - Technical details
- **TESTING_GUIDE.md** - Comprehensive testing
- **IMPLEMENTATION_SUMMARY.md** - Complete overview

---

**Happy Editing! 🎉**
