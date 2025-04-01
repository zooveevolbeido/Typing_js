// グローバル変数
let scriptText = ""; // 入力されたスクリプト
let timer = null;
let count = 0;
let currentIndex = 0;

// スクリプトをセットする
function setScript() {
    const userInput = document.getElementById("inputText").value;

    if (userInput.trim() === "") {
        alert("スクリプトを入力してください！");
        return;
    }

    scriptText = userInput; // 入力されたスクリプトを保存
    displayText(); // スクリプトを表示
    document.getElementById("inputArea").style.display = "none"; // 入力エリアを隠す
    document.getElementById("gameArea").style.display = "block"; // ゲームエリアを表示
}

// タイピング処理
function handleTyping(event) {
    const keyPressed = event.which || event.keyCode;

    // デフォルト動作を無効化（スペースキーなどによるスクロール防止）
    event.preventDefault();

    // 入力されたキーが現在の文字に一致する場合
    if (keyPressed === scriptText.charCodeAt(currentIndex)) {
        count++;
        currentIndex++;
        displayText(); // 表示を更新
    }
}

// スクリプト表示を動的に更新
function displayText() {
    const correctText = `<span style="color: red;">${scriptText.slice(0, currentIndex)}</span>`;
    const remainingText = `<span style="color: black;">${scriptText.slice(currentIndex)}</span>`;
    document.getElementById("txt").innerHTML = correctText + remainingText;

    // 自動スクロールは完全に無効化
}

// ゲームをスタート
function startGame() {
    const startMessage = document.getElementById("startMessage");
    if (startMessage) {
        startMessage.style.display = "none"; // スタートメッセージを隠す
    }

    if (timer) return; // タイマーがすでに動作している場合は何もしない

    let elapsedSeconds = 0;
    timer = setInterval(() => {
        elapsedSeconds++;
        document.getElementById("seconds").innerText = `${elapsedSeconds} seconds`;

        // タイピングが完了した場合
        if (count === scriptText.length) {
            clearInterval(timer);

            // Characters Per Second (文字数/秒) を計算
            const charsPerSecond = (scriptText.length / elapsedSeconds).toFixed(2);
            document.getElementById("charsPerSecond").innerText = charsPerSecond; // 表示更新
            document.getElementById("cpsDisplay").style.display = "block"; // CPSを表示

            alert(`お疲れ様です！タイピング完了時間: ${elapsedSeconds}秒\n速度: ${charsPerSecond} characters/s`);
        }
    }, 1000);
}

// ゲームをリセット
function resetGame() {
    clearInterval(timer);
    count = 0;
    currentIndex = 0;
    document.getElementById("txt").innerHTML = "";
    document.getElementById("seconds").innerText = "0 seconds";
    document.getElementById("cpsDisplay").style.display = "none"; // CPSを非表示
    timer = null;
}
