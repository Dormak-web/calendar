import React, {useState} from "react";
import TextField from "components/inputs/TextField";
import {StyledTagForm, StyledTagFormInputs, StyledTagFormTagList} from "styles/forms/StyledTagForm";
import {Color, Tag} from "interfaces/tag";

import Button from "components/Button";
import TagListItem from "components/tag/TagListItem";
import TextSelect from "components/inputs/TextSelect";
import {COLORS} from "constants/tag";
import {getNewTagId} from "utils/calendar";

type TagFormProps = {
  tags: Tag[],
  onAddTag: (tag: Tag) => void,
  onSave: (tag: Tag) => void,
  onRemove: (id: String) => void,
}

const TagForm = ({tags, onAddTag, onSave, onRemove}: TagFormProps) => {
  const [label, setLabel] = useState('');
  const [color, setColor] = useState<Color>();

  const handleAddTag = () => {
    if(!color) return

    const newTag: Tag = {
      id: getNewTagId(),
      label,
      color: color,
      value: label,
    }

    onAddTag(newTag)
  }

  return (
    <StyledTagForm>
      <StyledTagFormInputs>
        <TextField label='Name' value={label} onChange={setLabel}/>
        <TextSelect value={color} onChange={setColor} options={COLORS}/>
      </StyledTagFormInputs>
      <Button onClick={handleAddTag}>Add tag</Button>

      <div style={{display: 'flex'}}>
        <StyledTagFormTagList>
          {tags.map((tag) => <TagListItem tag={tag} onSave={onSave} onRemove={onRemove}/>)}
        </StyledTagFormTagList>
      </div>
    </StyledTagForm>
  )
}

export default TagForm