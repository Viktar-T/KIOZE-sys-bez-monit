# Card Layout Conversion Prompt

## Task
Convert slide "[SLIDE_TITLE]" with sections "[SECTION_1]", "[SECTION_2]" to card layouts. Keep section titles, convert content to cards.

## Structure Template
```html
<div className="row">
  <div className="col col--[SIZE] margin-bottom--md">
    <div className="card">
      <div className="card__header">
        <h4>🎯 Title</h4>
      </div>
      <div className="card__body">
        <ul>
          <li><strong>Label:</strong> Content</li>
        </ul>
      </div>
    </div>
  </div>
</div>
```

## Column Sizes
- **2 items**: `col--6` (50% each)
- **3 items**: `col--4` (33% each) 
- **4 items**: `col--3` (25% each)
- **Mixed**: Use appropriate sizing

## Requirements
- Add `margin-bottom--md` to all columns
- Use `<h4>` with emojis in card headers
- Structure content with `<strong>Label:</strong>` pattern
- Keep content concise and scannable
- Maintain technical accuracy

## Example Usage
```
Convert slide "Warstwa prezentacji (Front-end)" with sections "Typy aplikacji" and "Kluczowe cechy" to card layouts.
```

## Quality Check
- ✅ All sections converted to cards
- ✅ Proper column sizing  
- ✅ Consistent spacing
- ✅ Professional appearance
