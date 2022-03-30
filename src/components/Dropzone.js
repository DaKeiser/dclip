import React, {useMemo} from 'react';
import {useDropzone} from 'react-dropzone';
import { useColorMode } from '@chakra-ui/react';
import {
  secondaryBg, 
  primaryTextColor, 
  primaryTextColorAlt, 
  secondaryTextColor,
  secondaryTextColorAlt,
  borderColor,
  borderColorAlt,
  linkColor,
  shadowColor,
  bgColor,
  bgColorAlt
} from '../styles/darkMode'


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
  const {
    getRootProps,
    getInputProps,
    isFocused,
    isDragAccept,
    isDragReject
  } = useDropzone({accept: 'video/*'});

  const { colorMode } = useColorMode();

  const style = useMemo(() => ({
      ...{
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: '80px',
        width: '90%',
        borderWidth: 2,
        borderRadius: 2,
        borderColor: borderColor[colorMode],
        borderStyle: 'dashed',
        backgroundColor: bgColor[colorMode],
        color: primaryTextColorAlt[colorMode],
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
        <p>Drop a video file here</p>
      </div>
    </div>
  );
}

export default Dropzone;