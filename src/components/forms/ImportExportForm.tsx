import React, {ChangeEvent, useState} from "react";
import {StyledImportExportForm} from "styles/forms/StyledImportExportForm";
import Button from "components/Button";
import UploadFile from "components/inputs/UploadFile";
import Divider from "components/Divider";

type ImportExportFormProps = {
  onExport: Function,
  onImport: Function,
  onExportToPNG: Function,
}

const ImportExportForm = ({onExport, onImport, onExportToPNG}: ImportExportFormProps) => {
  const [fileJSON, setFileJSON] = useState<any>();

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const fileReader = new FileReader();
    if (e.target.files && e.target.files[0]) {
      fileReader.readAsText(e.target.files[0], "UTF-8");
      fileReader.onload = e => {
        setFileJSON(e.target?.result);
      };
    }
  };
  const handleImport = () => {
    onImport(fileJSON)
  }

  return (
    <StyledImportExportForm>
      <Button onClick={onExport}>Export</Button>
      <Button onClick={onExportToPNG}>Export to PNG</Button>

      <Divider/>
      <Button disabled={!fileJSON} onClick={handleImport}>Import</Button>
      <UploadFile onChange={handleFileChange}/>
    </StyledImportExportForm>
  )
}

export default ImportExportForm
