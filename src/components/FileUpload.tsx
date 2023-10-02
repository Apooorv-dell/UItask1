import { Box, Input } from "@chakra-ui/react";
import { useState } from "react";

const FileUpload = () => {
  const [selectedFile, setSelecteeFile] = useState<FileList | null>(null);


  
  console.log(selectedFile);
  return (
    <>
      <Box>
        <Input
          type="file"
          accept=".png ,.jpg, .jpeg"
          onChange={(e) => {
            setSelecteeFile(e.target.files);
          }}
        />
      </Box>
    </>
  );
};

export default FileUpload;
