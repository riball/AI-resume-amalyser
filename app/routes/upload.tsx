import React from 'react';
import {useEffect} from "react";
import Navbar from "~/components/Navbar";
import FileUploader from "~/routes/FileUploader";

const Upload = () => {
    const [isProcessing, setIsProcessing] = React.useState(false);
    const [statusText, setStatusText] = React.useState(' ');
    const [file, setFile] = React.useState<File>(' ')
    const handleFileSelect=(file: File | null) =>  {
        setFile(file)
    }

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>)=> {}
    return (<main className="bg-[url('/assets/images/bg-main.svg')] bg-cover">
        <Navbar />
        <section className="main-section">
            <div className='page-heading py-16'>
            <h1>enter your details and upload resume for your ATS score</h1>
                {isProcessing ? (
                    <>
                        <h2>{statusText}</h2>
                        <img src='/assets/images/resume-scan.gif' className='w-full' />
                    </>
                ):(
                    <h2>Drop your resume for an ATS score and improvement tips</h2>
                )}
                {(!isProcessing)&&(
                    <form id='upload-form' onSubmit={handleSubmit} className='flex flex-col gap-4 mt-8'>
                        <div className='form-div'>
                            <label htmlFor='company-name'>Company Name</label>
                            <input type='text' name='company-name' placeholder='Company Name' id='company-name'></input>
                        </div>
                        <div className='form-div'>
                            <label htmlFor='job-title'>Job title</label>
                            <input type='text' name='job-title' placeholder='Job title' id='job-title'></input>
                        </div>
                        <div className='form-div'>
                            <label htmlFor='job-description'>Job description</label>
                            <textarea rows={5} type='text' name='job-description' placeholder='Job description' id='job-description'></textarea>
                        </div>
                        <div className='form-div'>
                            <label htmlFor='uploader'>Upload resume</label>
                            <FileUploader onFileSelect={handleFileSelect}/>
                        </div>
                    </form>
                    )}
            </div>
            <button className='primary-button' type='submit'>Analyze Resume</button>
        </section>
        </main>
)};
export default Upload