# Easy Transcribe



Easy Transcribe is a Python application that utilizes the Whisper AI for transcription and provides a user-friendly interface built with EEL.

## Features

- Transcribe text from video and audio files.
- Powered by the Whisper AI for accurate and efficient transcription.
- User interface created using EEL, making it easy to use.

## Requirements
- The application has been tested on `Python 3.10.6.`

## Installation

1. Clone this repository:
    ```bash
    git clone https://github.com/Normalizex/easy-transcribe.git
    ```
2. Navigate to the project directory:
    ```bash
    cd easy-transcribe
    ```
3. Install the required dependencies:
    ```bash
    pip install -r requirements.txt
    ```
4. Install or download `ffmpeg`:
    * Install: 
        ```bash
        # on Ubuntu or Debian
        sudo apt update && sudo apt install ffmpeg

        # on Arch Linux
        sudo pacman -S ffmpeg

        # on MacOS using Homebrew (https://brew.sh/)
        brew install ffmpeg

        # on Windows using Chocolatey (https://chocolatey.org/)
        choco install ffmpeg

        # on Windows using Scoop (https://scoop.sh/)
        scoop install ffmpeg
        ```
    * Download `ffmpeg` as bin/exe/etc files from [official website](https://ffmpeg.org/download.html), then you will need to move `ffmpeg` to the `easy-transcribe` folder.

## Usage
1. Run the application:
    ```bash
    python main.py
    ```
2. The application will open in your default web browser.
3. Use the interface to select a video or audio file for transcription.
    * If you downloaded ffmpeg from website, the application will only work with files that are in the `easy-transcribe` folder!
4. Once the transcription is complete, the text will be displayed in the application.

## Contributing
Contributions are welcome! If you find any issues or have suggestions, please feel free to create an issue or submit a pull request.

## License
This project is licensed under the __[MIT License.](/LICENSE)__