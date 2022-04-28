# KAD Vue模板 Changelog
  
## [1.0.0] - 2021-06-10

初版 Release

## [1.1.0] - 2021-06-23

### Added
- `text-overflow` mixin
- SFC code snippet

### Changed
- Eslint rules
- Stylelint order rules
- Blueprint template

## [1.1.1] - 2021-07-22

### Fixed
- Use local version of stylelint
- Fix style format twice after saving the file

## [1.2.0] - 2021-09-02

### Added
- CLI對話輸入欄位 - `customer id`, `表頭公司名稱`, `表尾分機號碼`
- `CUSTOMER_ID` 與 `EVENT_ID` env變數
- 整招表頭表尾樣式
- RWD mixin 新增 `between` 參數
- NCC Elog 模組

### Changed
- Eslint 設定
- 放寬公司命名規則 - 開放底線 `_` & 橫槓 `-`
- `index.html` favicon 路徑改用 `BASE_URL`
- reset 樣式
- `README.md` 內容
- Detect Browser 模組

## [1.2.1] - 2021-09-06

### Changed
- 移除表頭表尾自動化設定&樣式

## [1.2.2] - 2021-09-06

### Changed
- node安全性更新版本 v12.22.6

## [1.2.3] - 2021-09-06

### Changed
- 移除不必要的樣式

## [1.2.4] - 2021-09-09

### Fixed
- 修復 index template favicon 路徑錯誤

## [1.2.5] - 2021-10-01

### Added
- 新增表頭表尾自動化設定&元件
### Changed
- dispatchLog新增接收custno參數、支援外部call function
- jira網址 URL protocol 改為 `https`

## [1.2.6] - 2021-11-02

### Added
- 新增練習專案的判斷，若為練習專案則不打 custno log
- NCC-Elog Plugin 可從 `Vue.use()` 直接傳入custno參數作為default設定
### Changed
- NCC-Elog 送出的 custno 固定為字串
- README 內容調整
  
## [1.2.7] - 2021-11-02

### Added
- 新增練習專案的README說明
### Fixed
- 修復 NCC-Elog 錯誤

## [1.2.8] - 2022-03-01

### Fixed
- 新版 docker 環境下無法 hot-reload 的問題
- Apple Silicon 環境下無法成功打包的問題

### Add
- Vue-Cli 固定在版本4（目前專案不支援 webpack 5）
- 修改專案初始腳本，避免刪除整個 node_modules 資料夾
