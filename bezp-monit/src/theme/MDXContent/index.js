import React from 'react';
import MDXContent from '@theme-original/MDXContent';
import PresentationMode from '@site/src/components/PresentationMode';

// Wraps the content of every Markdown page to add presentation mode
// (the button is shown only on lecture and exercise pages)
export default function MDXContentWrapper(props) {
  return (
    <>
      <PresentationMode />
      <MDXContent {...props} />
    </>
  );
}
