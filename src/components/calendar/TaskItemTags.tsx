import React from "react";
import {StyledTaskItemTag, StyledTaskItemTags} from "styles/components/calendar/StyledTaskItemTags";
import {Tag} from "interfaces/tag";

type TaskItemTagsProps = {
  tags: Tag[],
}

const TaskItemTags = ({tags}: TaskItemTagsProps) => {
  return (
    <StyledTaskItemTags>
      {tags.map(tag => <StyledTaskItemTag style={{backgroundColor: tag.color.color}}>
      </StyledTaskItemTag>)}
    </StyledTaskItemTags>
  )
}

export default TaskItemTags