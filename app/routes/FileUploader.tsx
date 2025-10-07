import React, {useCallback, useState} from 'react'
import {useDropzone} from 'react-dropzone'

interface FileUploaderProps {
    onFileSelect?: (file: File | null) => void;
}
const FileUploader = ({onFileSelect}:FileUploaderProps) =>{

    const onDrop = useCallback((acceptedFiles:File[]) => {

        onFileSelect?.(file)
        // Do something with the files
    }, [onFileSelect]);
    const {getRootProps, getInputProps, isDragActive ,acceptedFiles} = useDropzone({
        onDrop,
        multiple:false,
        accept : { 'application/pdf': ['.pdf'] },
        maxSize: 20 * 1024 * 1024,
    })
    const file = acceptedFiles[0] || null;



    return (
        <div className='w-full gradient-border'>
            <div {...getRootProps()}>
                <input {...getInputProps()} />


                    {file?(
                        <div className='uploader-selected-file' onClick={e=>e.stopPropagation()}>
                            <img src='/assets/images/pdf.png' alt='pdf' className='size-10'/>
                            <div className='flex items-center space-x-3'>

                                <div>
                                    <p className='text-sm font-medium text-gray-700 truncate max-w-sm'>
                                        {file.name}
                                    </p>
                                    <p className='text-sm text-gray-500'>
                                        {formatSize(file.size)}

                                    </p>
                                </div>

                            </div>
                        </div>

                    ):(
                        <div>
                            <div className='cursor-pointer space-y-4'>
                                <div className='mx-auto w-16 flex items-center justify-center'>
                                    <img src='/assets/icons/info.svg' alt='information' className='size-20'/>
                                </div>
                            <p className='text-lg text-gray-500'>
                            <span className='font-semibold'> click to upload </span>
                            </p> or drag and drop
                            <p className='text-lg text-gray-500'>PDF (max 20MB)</p>

                        </div>
                        </div>
                    )}

            </div>
        </div>
    );
};
export default FileUploader