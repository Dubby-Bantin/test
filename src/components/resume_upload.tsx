import { Dispatch, SetStateAction, useCallback } from "react";
import { useDropzone } from "react-dropzone";
import { PiFilePdfThin } from "react-icons/pi";
import { Button } from "@/components/ui/button";

const ResumeUpload = ({
  message,
  file,
  preview,
  setFile,
  setPreview,
}: {
  message: string;
  file: File | null;
  preview: string;
  setFile: Dispatch<SetStateAction<File | null>>;
  setPreview: Dispatch<SetStateAction<string>>;
}) => {
  const onDrop = useCallback(
    (acceptedFiles: File[]) => {
      const uploadedFile = acceptedFiles[0];

      if (uploadedFile) {
        setFile(uploadedFile);

        if (uploadedFile.type === "application/pdf") {
          setPreview(URL.createObjectURL(uploadedFile));
        } else {
          setPreview("");
        }
      }
    },
    [setFile, setPreview]
  );

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: {
      "application/pdf": [".pdf"],
      "application/msword": [".doc", ".docx"],
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document":
        [".docx"],
    },
    maxFiles: 1,
  });

  return (
    <div
      {...getRootProps()}
      className="p-6 rounded-md cursor-pointer transition-all border border-dashed bg-white text-gray-900 border-gray-300"
    >
      <input {...getInputProps()} />

      {!file ? (
        // Default Upload State
        <div className="w-full flex flex-col h-[300px] justify-center items-center gap-3">
          <Button asChild size="icon" variant="secondary">
            <PiFilePdfThin className="w-12 h-12 text-red-600" />
          </Button>
          <p>{message ? message : "Click or Drag & Drop to Upload Resume"}</p>
        </div>
      ) : (
        <div className="h-full w-full">
          <ul className="mt-4">
            <li className="text-sm font-medium">{file.name}</li>
          </ul>
          <div className="h-[300px] mt-2">
            {preview ? (
              <embed
                src={preview}
                type="application/pdf"
                width="100%"
                className="h-full object-contain"
              />
            ) : (
              // No preview for Word Docs
              <p className="text-gray-600">
                Preview not available for Word documents.
              </p>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default ResumeUpload;
