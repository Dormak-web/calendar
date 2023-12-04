import React, {useState} from "react";
import {StyledFilterForm} from "styles/forms/StyledFilterForm";
import TextField from "components/inputs/TextField";
import TextMultiSelect from "components/inputs/TextMultiSelect";
import InputLabel from "components/InputLabel";
import {Tag} from "interfaces/tag";
import Button from "components/Button";
import {FilterOptions} from "interfaces/calendar";

type FilterFormProps = {
  tags: Tag[],
  onFilter: (options: FilterOptions) => void
}

const FilterForm = ({tags, onFilter}: FilterFormProps) => {
  const [title, setTitle] = useState('');
  const [filterTags, seFilter] = useState<Tag[]>([]);

  const handleFilter = () => {
    onFilter({
      search: title,
      tags: filterTags
    })
  }

  return (
    <StyledFilterForm>
      <TextField label='Name' value={title} onChange={setTitle}/>
      <InputLabel label='Tags'>
        <TextMultiSelect value={filterTags} onChange={seFilter} options={tags}/>
      </InputLabel>
      <Button onClick={handleFilter}>Filter</Button>
    </StyledFilterForm>
  )
}

export default FilterForm