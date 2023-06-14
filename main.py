import wx
import eel
import whisper

eel.init('web')
model = whisper.load_model("base")

@eel.expose
def whisperTranscribe(filePath: str) -> str:    
    result = model.transcribe(f'{filePath}')
    return result['text']

@eel.expose
def openFileDialog():
    _ = wx.App(None)
    style = wx.FD_OPEN | wx.FD_FILE_MUST_EXIST
    dialog = wx.FileDialog(None, 'Open', wildcard="*", style=style)
    path = dialog.GetPath() if dialog.ShowModal() == wx.ID_OK else None
    dialog.Destroy()

    return None if not path else path.replace("\\", "/")

eel.start('index.html', size=(320, 120))