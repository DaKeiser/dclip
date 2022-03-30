import React, {useMemo, useState, useEffect} from 'react';
import {useDropzone} from 'react-dropzone';
import { Image, HStack } from '@chakra-ui/react';

const thumbsContainer = {
  display: 'flex',
  flexDirection: 'row',
  flexWrap: 'wrap',
};

const thumb = {
  display: 'inline-flex',
  borderRadius: 10,
  border: '1px solid #eaeaea',
  marginBottom: 8,
  marginRight: 150,
  width: 100,
  height: 100,
  padding: 4,
  boxSizing: 'border-box'
};

const thumbInner = {
  display: 'flex',
  minWidth: 0,
  overflow: 'hidden'
};


const focusedStyle = {
    borderColor: '#2196f3'
};

const acceptStyle = {
    borderColor: '#00e676'
};

const rejectStyle = {
    borderColor: '#ff1744'
};

function Dropzone(props) {
  const [files, sf] = useState([]);
  const {
    getRootProps,
    getInputProps,
    isFocused,
    isDragAccept,
    isDragReject,
    acceptedFiles
  } = useDropzone({
    accept: 'video/*',
    onDrop: acceptedFiles => {
      props.setFiles(acceptedFiles.map(file => Object.assign(file, {
        preview: URL.createObjectURL(file)
      })));
      sf(acceptedFiles.map(file => Object.assign(file, {
        preview: URL.createObjectURL(file)
      })));
    }
  });

  const thumbs = files.map(file => (
    <div style={thumb} key={file.name}>
      <HStack
        spacing='100px'
      >
      <div style={thumbInner}>
        <Image
          src={file.preview}
        />
      </div>
      <p>{file.name}</p>
      </HStack>

    </div>
  ));

  useEffect(() => {
    files.forEach(file => URL.revokeObjectURL(file.preview));
  }, [files]);

  const style = useMemo(() => ({
      ...{
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: '80px',
        width: '90%',
        borderWidth: 2,
        borderRadius: 8,
        borderColor: 'black',
        borderStyle: 'dashed',
        backgroundColor: 'white',
        color: 'black',
        outline: 'none',
        transition: 'border .24s ease-in-out'
    },
    ...(isFocused ? focusedStyle : {}),
    ...(isDragAccept ? acceptStyle : {}),
    ...(isDragReject ? rejectStyle : {})
  }), [
    isFocused,
    isDragAccept,
    isDragReject
  ]);

  return (
    <div className="container">
      <div {...getRootProps({style})}>
        <input {...getInputProps()} />
          {acceptedFiles.length>0 ?       
            <aside style={thumbsContainer}>
              {thumbs}
            </aside>:<p>Drop a video file here</p>
          }
      </div>
    </div>
  );
}

export default Dropzone;