import React, { useEffect } from 'react';
import RichTextEditor, { EditorValue } from "react-rte";

interface EditorProps {
	initialValue: string
	parentCallback: any
}

export const Editor: React.FC<EditorProps> = (props) => {
	const [value, setValue] = React.useState<EditorValue>(
		props.initialValue ? RichTextEditor.createValueFromString(props.initialValue, 'html') :
			RichTextEditor.createEmptyValue()
	);

	useEffect(() => {

	}, [])

	return (
		<RichTextEditor
			onChange={(newValue) => {
				// console.log('ye', newValue.toString('html'))
				props.parentCallback(newValue.toString('html'))
				setValue(newValue);
			}}
			value={value}
		/>
	);
};

export default Editor;