import React, { useCallback, useState } from 'react';
import { useDropzone } from 'react-dropzone';

const FileUploadLLM = () => {
  const [file, setFile] = useState<File | null>(null);
  const [extractedData, setExtractedData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const onDrop = useCallback((acceptedFiles: File[]) => {
    if (acceptedFiles.length > 0) {
      setFile(acceptedFiles[0]);
    }
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      'application/pdf': ['.pdf'],
      'image/*': ['.png', '.gif', '.jpeg', '.jpg']
    }
  });

  const handlePaste = useCallback((event: React.ClipboardEvent<HTMLDivElement>) => {
    const items = event.clipboardData.items;
    for (let i = 0; i < items.length; i++) {
      if (items[i].type.indexOf('image') !== -1) {
        const blob = items[i].getAsFile();
        if (blob) {
          setFile(blob);
        }
        break;
      }
    }
  }, []);

  const processFile = async () => {
    if (!file) return;

    setLoading(true);
    setError(null);

    const formData = new FormData();
    formData.append('file', file);

    try {
      const response = await fetch('/api/process-file', {
        method: 'POST',
        body: formData,
      });
      const data = await response.json();
      setExtractedData(data);
    } catch (err) {
      setError((err as any).message || 'An error occurred');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-4 max-w-md mx-auto">
      <div
        {...getRootProps()}
        className="border-2 border-dashed border-gray-300 rounded-lg p-4 text-center cursor-pointer"
        onPaste={handlePaste}
      >
        <input {...getInputProps()} />
        {isDragActive ? (
          <p>Drop the file here ...</p>
        ) : (
          <p>Drag and drop a file here, or click to select a file</p>
        )}
        <p className="text-sm text-gray-100">You can also paste an image from clipboard</p>
      </div>

      {file && (
        <div className="mt-4">
          <p>Selected file: {file.name}</p>
          <div className="flex flex-col items-center">
            <button
              onClick={processFile}
              className="mt-2 px-4 py-2 bg-blue-500 text-white rounded-xl hover:bg-blue-600"
              disabled={loading}
            >
              {loading ? 'Processing...' : 'Process File'}
            </button>
          </div>
        </div>
      )}

      {error && (
        <div className="mt-4 text-red-500">{error}</div>
      )}

      {extractedData && (
        <div className="mt-4">
          <h3 className="text-lg font-semibold">Extracted Data:</h3>
          <pre className="bg-gray-100 p-2 rounded mt-2 overflow-x-auto">
            {JSON.stringify(extractedData, null, 2)}
          </pre>
        </div>
      )}
    </div>
  );
};

export default FileUploadLLM;