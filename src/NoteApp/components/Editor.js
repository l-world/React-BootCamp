import React from 'react'
import ReactMde from 'react-mde'
import ShowDown from 'showdown'
import "react-mde/lib/styles/css/react-mde-all.css";

export default function Editor({ currentNote, updateNote }) {
    const [selectedTab, setSelectTab] = React.useState("write");
    const converter = new ShowDown.Converter({
        tables: true,
        simplifiedAutoLink: true,
        strikethrough: true,
        tasklists: true
    })

    return (
        <section className='pane editor'>
            <ReactMde
                value={currentNote.body}
                onChange={updateNote}
                selectedTab={selectedTab}
                onTabChange={setSelectTab}
                generateMarkdownPreview={
                    (markdown =>
                        Promise.resolve(converter.makeHtml(markdown))
                    )
                }
                minEditorHeight={80}
                heightUnits="vh"
            />
        </section>
    )
}
