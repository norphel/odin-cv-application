import Editor from './Editor';
import Preview from './Preview'

import '../styles/Main.css';

export default function Main () {
    return (
        <>
            <main>
                <Editor />
                <Preview />
            </main>
        </>
    )
}