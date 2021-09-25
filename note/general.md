## note
- css, html 不壓縮
- img 不換名字

- 顏色統一管理
- 內文字級控制

### 1400px 以下
- 小標題 20px
- 內文 16px

## color
- red #951e23
- gray #f5f5f5
- brown #a78a70
- blue #142638

## 麵包屑 16px
 / 聯絡我們

## button PC:20px MB: 16px 
```htmlembedded=
   <Button
      text="view more"
      :config="{to:'menu'}"
      class="futuraBTMedium"
    ></Button>

    <Button
      text="菜單下載"
      icon="download2x"
      :config="{href:'/104 Application Instructions.pdf'}"
      download="MENU"
    ></Button>

    <Button
      text="back"
      class="futuraBTMedium"
    ></Button>
```