import React, {useState} from "react";
import {
  StyledTagListItem,
  StyledTagListItemActions,
  StyledTagListItemRow
} from "styles/components/tag/StyledTagListItem";
import {Color, Tag} from "interfaces/tag";
import TextField from "components/inputs/TextField";
import TextSelect from "components/inputs/TextSelect";
import {COLORS} from "constants/tag";
import Button from "components/Button";
import {IconSave, IconTrash} from "components/icons";

type TagListItemProps = {
  tag: Tag,
  onSave: (tag: Tag) => void,
  onRemove: (id: String) => void,
}

const TagListItem = ({tag, onSave, onRemove}: TagListItemProps) => {
  const [label, setLabel] = useState(tag.label);
  const [color, setColor] = useState<Color>(tag.color);

  const handleSave = () => {
    const editTag: Tag = {
      id: tag.id,
      value: tag.id,
      label,
      color
    }
    onSave(editTag)
  }

  return (
    <StyledTagListItem>
      <div className='name'>
        <TextField label='Name' value={label} onChange={setLabel}/>
      </div>
      <StyledTagListItemRow>
        <div style={{width: '65%'}}>
          <TextSelect options={COLORS} value={color} onChange={setColor}/>
        </div>
        <StyledTagListItemActions>
          <Button onClick={handleSave}><IconSave/></Button>
          <Button onClick={() => onRemove(tag.id)}><IconTrash/></Button>
        </StyledTagListItemActions>
      </StyledTagListItemRow>
    </StyledTagListItem>
  )
}

export default TagListItem