document.addEventListener('DOMContentLoaded', async () => {
    window.resizeTo(600, 450);

    let is_processing = false;

    const filePath = document.querySelector('#filePath');
    const transcribeResult = document.querySelector('#transcribeResult');
    const openFileExplorerBtn = document.querySelector('#openFileExplorer');
    const transcribeBtn = document.querySelector('#transcribeBtn');
    const exportBtn = document.querySelector('#export');

    openFileExplorerBtn.addEventListener('click', async() => {
        eel.openFileDialog()().then((path) => {
            if (!path) return;

            filePath.value = path;
        });
    });

    transcribeBtn.addEventListener('click', async() => {
        if (!filePath.value) return alert('File path is empty!');
        if (is_processing) return;

        const targetPath = `${filePath.value}`

        is_processing = true;

        transcribeBtn.innerText = 'Processing';
        transcribeBtn.disabled = is_processing;
        filePath.disabled = is_processing;
        openFileExplorerBtn.disabled = is_processing;


        const processingAnimationInterval = setInterval(async() => {
            if (!is_processing) return clearInterval(processingAnimationInterval);
    
            const dots = transcribeBtn.innerText.split('').filter(letter => letter === '.').length;
            transcribeBtn.innerText = dots >= 3 ? 'processing' : `${transcribeBtn.innerText}.`;
        }, 300);

        await eel.whisperTranscribe(targetPath)().then((text) => {
            transcribeResult.value = text;

            const targetFilename = targetPath.split("/").pop().replace(/\.[^/.]+$/, "");
            const file = new Blob([transcribeResult.value], { type: "text/plain" });
            const a = document.createElement("a"), url = URL.createObjectURL(file);
            a.href = url;
            a.download = `transribe-${targetFilename}`; 
            document.body.appendChild(a);
            a.click();
            setTimeout( () => {
                document.body.removeChild(a);
                window.URL.revokeObjectURL(url);  
            }, 0); 

        }).catch((error) => {
            alert(error.errorText);
        });

        is_processing = false;

        transcribeBtn.innerText = 'Transcribe';
        transcribeBtn.disabled = is_processing;
        filePath.disabled = is_processing;
        openFileExplorerBtn.disabled = is_processing;
    });

    exportBtn.addEventListener('click', async() => {
		const file = new Blob([transcribeResult.value], { type: "text/plain" });
        const a = document.createElement("a"), url = URL.createObjectURL(file);
		a.href = url;
		a.download = `transribe`;
		document.body.appendChild(a);
		a.click();
		setTimeout( () => {
			document.body.removeChild(a);
			window.URL.revokeObjectURL(url);  
		}, 0); 
    });
});