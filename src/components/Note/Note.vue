<template>
  <div>
    <!-- 标题和添加 -->
    <div class="title">
      <div style="display: flex; margin-left: 50px; width: 400px; flex: 1;" >
        <svg t="1684920123677" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="59068" width="64" height="64"><path d="M818.176 51.2c-10.24 0-18.432 9.216-18.432 20.48l-2.048 720.896 75.776 79.872c7.168 7.168 18.432 7.168 25.6 0l70.656-73.728c4.096-4.096 6.144-9.216 6.144-14.336L977.92 71.68c0-11.264-8.192-20.48-18.432-20.48H818.176z" fill="#66C1FF" p-id="59069"></path><path d="M966.656 150.528V80.896c0-8.192-6.144-14.336-12.288-14.336H822.272c-7.168 0-12.288 6.144-12.288 14.336v69.632h156.672z" fill="#FFE08A" p-id="59070"></path><path d="M982.016 165.888l-188.416-1.024V79.872c0-16.384 12.288-29.696 27.648-29.696h132.096c16.384 1.024 29.696 14.336 29.696 30.72l-1.024 84.992z m-157.696-31.744h126.976L952.32 81.92H825.344l-1.024 52.224z" fill="#330867" p-id="59071"></path><path d="M830.464 81.92h116.736l-2.048 698.368-58.368 60.416-58.368-60.416 2.048-698.368m-18.432-30.72c-6.144 0-12.288 6.144-12.288 13.312l-2.048 728.064 80.896 83.968c2.048 2.048 5.12 4.096 8.192 4.096 3.072 0 6.144-1.024 8.192-4.096l76.8-79.872c2.048-2.048 4.096-6.144 4.096-9.216l2.048-721.92c0-7.168-5.12-13.312-12.288-13.312l-153.6-1.024z" fill="#330867" p-id="59072"></path><path d="M893.952 910.336l67.584-112.64c4.096-6.144-1.024-14.336-8.192-14.336H819.2c-7.168 0-12.288 8.192-8.192 14.336l66.56 112.64c4.096 6.144 13.312 6.144 16.384 0z" fill="#FC6B79" p-id="59073"></path><path d="M885.76 930.816c-9.216 0-17.408-5.12-21.504-12.288l-66.56-112.64c-4.096-8.192-5.12-17.408 0-25.6 4.096-8.192 12.288-12.288 21.504-12.288h134.144c9.216 0 17.408 5.12 21.504 12.288 4.096 8.192 4.096 17.408 0 25.6l-67.584 112.64c-4.096 7.168-12.288 12.288-21.504 12.288z m-56.32-133.12l56.32 96.256 57.344-95.232-113.664-1.024z" fill="#330867" p-id="59074"></path><path d="M686.08 848.896H112.64c-33.792 0-61.44-27.648-61.44-61.44v-665.6c0-33.792 27.648-61.44 61.44-61.44h573.44c33.792 0 61.44 27.648 61.44 61.44v665.6c0 33.792-27.648 61.44-61.44 61.44z" fill="#FC6B79" p-id="59075"></path><path d="M686.08 864.256H112.64c-41.984 0-76.8-34.816-76.8-76.8v-665.6c0-41.984 34.816-76.8 76.8-76.8h573.44c41.984 0 76.8 34.816 76.8 76.8v665.6c0 41.984-34.816 76.8-76.8 76.8zM112.64 74.752c-25.6 0-46.08 20.48-46.08 46.08v665.6c0 25.6 20.48 46.08 46.08 46.08h573.44c25.6 0 46.08-20.48 46.08-46.08v-665.6c0-25.6-20.48-46.08-46.08-46.08H112.64z" fill="#330867" p-id="59076"></path><path d="M744.448 788.48H96.256c-24.576 0-44.032 19.456-44.032 44.032v44.032C52.224 902.144 71.68 921.6 96.256 921.6h650.24" fill="#DD365E" p-id="59077"></path><path d="M746.496 936.96H96.256c-32.768 0-59.392-26.624-59.392-59.392v-44.032c0-32.768 26.624-59.392 59.392-59.392h648.192v30.72H96.256c-16.384 0-28.672 13.312-28.672 28.672v44.032c0 16.384 13.312 28.672 28.672 28.672h650.24v30.72z" fill="#330867" p-id="59078"></path><path d="M156.672 65.536h142.336V194.56l-59.392-54.272c-3.072-3.072-7.168-5.12-12.288-5.12-4.096 0-9.216 2.048-12.288 5.12L156.672 194.56V65.536z" fill="#99CAFF" p-id="59079"></path><path d="M288.768 75.776v96.256L246.784 133.12c-5.12-5.12-12.288-7.168-18.432-7.168s-13.312 3.072-18.432 7.168l-41.984 37.888V75.776h120.832m13.312-20.48H154.624c-4.096 0-7.168 3.072-7.168 7.168v138.24c0 4.096 4.096 7.168 7.168 7.168 2.048 0 3.072-1.024 5.12-2.048l63.488-57.344c1.024-1.024 3.072-2.048 5.12-2.048s4.096 1.024 5.12 2.048l63.488 57.344c1.024 1.024 3.072 2.048 5.12 2.048 4.096 0 7.168-3.072 7.168-7.168V62.464c0-4.096-3.072-7.168-7.168-7.168z" fill="#330867" p-id="59080"></path><path d="M279.198018 566.440809a166.912 166.912 0 1 0 236.045094-236.053334 166.912 166.912 0 1 0-236.045094 236.053334Z" fill="#FFE08A" p-id="59081"></path><path d="M397.312 630.784c-100.352 0-182.272-81.92-182.272-182.272S296.96 266.24 397.312 266.24s182.272 81.92 182.272 182.272-81.92 182.272-182.272 182.272z m0-333.824C313.344 296.96 245.76 365.568 245.76 448.512s67.584 151.552 151.552 151.552S548.864 532.48 548.864 448.512 480.256 296.96 397.312 296.96z" fill="#330867" p-id="59082"></path><path d="M412.672 364.544L430.08 399.36c2.048 5.12 7.168 8.192 12.288 9.216l37.888 5.12c14.336 2.048 19.456 19.456 9.216 28.672l-27.648 26.624c-4.096 4.096-6.144 9.216-5.12 15.36l6.144 37.888c2.048 14.336-12.288 24.576-24.576 17.408L405.504 522.24c-5.12-3.072-11.264-3.072-15.36 0l-33.792 17.408c-12.288 6.144-26.624-4.096-24.576-17.408l6.144-37.888c1.024-5.12-1.024-11.264-5.12-15.36l-27.648-26.624c-10.24-10.24-4.096-26.624 9.216-28.672l37.888-5.12c5.12-1.024 10.24-4.096 12.288-9.216l17.408-34.816c6.144-12.288 24.576-12.288 30.72 0z" fill="#9555B5" p-id="59083"></path><path d="M347.136 557.056c-7.168 0-13.312-2.048-19.456-6.144-10.24-7.168-15.36-19.456-13.312-31.744l6.144-37.888v-1.024l-27.648-26.624c-9.216-8.192-12.288-21.504-8.192-32.768 4.096-12.288 13.312-20.48 25.6-21.504l37.888-5.12s1.024 0 1.024-1.024l17.408-34.816a31.50848 31.50848 0 0 1 57.344 0l17.408 34.816 1.024 1.024 37.888 5.12c12.288 2.048 22.528 10.24 25.6 21.504s1.024 24.576-8.192 32.768l-27.648 26.624s-1.024 1.024 0 1.024l6.144 37.888c2.048 12.288-3.072 24.576-13.312 31.744-10.24 7.168-23.552 8.192-33.792 2.048l-33.792-17.408h-1.024L360.448 552.96c-3.072 3.072-8.192 4.096-13.312 4.096z m50.176-186.368c-1.024 0-1.024 1.024-1.024 1.024L378.88 405.504c-5.12 9.216-13.312 16.384-24.576 17.408l-37.888 5.12s-1.024 0-1.024 1.024v2.048l27.648 26.624c7.168 7.168 11.264 18.432 9.216 28.672l-6.144 37.888s0 1.024 1.024 2.048 1.024 0 2.048 0l33.792-17.408c9.216-5.12 20.48-5.12 29.696 0l33.792 17.408h2.048c1.024-1.024 1.024-1.024 1.024-2.048l-6.144-37.888c-2.048-10.24 2.048-21.504 9.216-28.672l27.648-26.624s1.024-1.024 0-2.048c0-1.024-1.024-1.024-1.024-1.024l-38.912-5.12c-10.24-1.024-19.456-8.192-24.576-17.408l-17.408-34.816h-1.024z" fill="#330867" p-id="59084"></path>
        </svg>
        <span style="font-size:30px ;padding-left: 10px; padding-top: 12px;">我的笔记本</span> 
      </div>
      <div style="display: flex;">
        <el-tooltip class="item" effect="light" content="添加卡片" placement="bottom-start">
          <svg @click="showAddCardDialog" t="1684919521612" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="30046" width="48" height="48"><path d="M814.336 904.0896H216.0128c-52.2752 0-94.6176-42.3424-94.6176-94.6176V387.4304c0-52.2752 42.3424-94.6176 94.6176-94.6176h598.272c52.2752 0 94.6176 42.3424 94.6176 94.6176v422.0416c0.0512 52.2752-42.3424 94.6176-94.5664 94.6176z" fill="#7BD3FF" p-id="30047"></path><path d="M811.7248 292.8128h-94.6688c53.6576 0 97.1776 43.52 97.1776 97.1776v416.9216c0 53.6576-43.52 97.1776-97.1776 97.1776h94.6688c53.6576 0 97.1776-43.52 97.1776-97.1776V389.9904c0.0512-53.6576-43.4688-97.1776-97.1776-97.1776z" fill="#5BC7FC" p-id="30048"></path><path d="M811.7248 292.8128H218.5728c-53.6576 0-97.1776 43.52-97.1776 97.1776V474.112h787.5072V389.9904c0.0512-53.6576-43.4688-97.1776-97.1776-97.1776z" fill="#F5D126" p-id="30049"></path><path d="M811.7248 292.8128h-94.6688c53.6576 0 97.1776 43.52 97.1776 97.1776V474.112h94.6688V389.9904c0.0512-53.6576-43.4688-97.1776-97.1776-97.1776z" fill="#F2B200" p-id="30050"></path><path d="M824.9856 292.8128l-28.5696-91.2896c-16.0256-51.2512-71.0144-79.4624-122.0096-62.5152L211.4048 292.8128h613.5808z" fill="#FFBE4A" p-id="30051"></path><path d="M717.2608 223.0272l21.8112 69.8368h85.9648l-28.5696-91.2896c-16.0256-51.2512-71.0144-79.4624-122.0096-62.5152l-49.92 16.5888c41.216-0.4608 79.7184 25.856 92.7232 67.3792z" fill="#F2842B" p-id="30052"></path><path d="M924.16 384.8704c0-0.4096-0.0512-0.8704-0.0512-1.28-1.792-51.0976-38.5024-93.4912-87.04-103.7312l-25.9072-82.8928c-9.0112-28.7744-28.7232-52.1728-55.552-65.8944-26.8288-13.7216-57.344-16.0768-85.9648-6.6048L207.616 277.9136c-55.5008 4.1984-99.5328 49.7664-101.376 105.8816 0 0.3072-0.0512 0.6144-0.0512 0.8704 0 0.9216-0.1536 1.8432-0.1536 2.7648v422.0416c0 60.6208 49.3568 109.9776 109.9776 109.9776h598.272c60.6208 0 109.9776-49.3568 109.9776-109.9776V387.4304c0.0512-0.8704-0.1024-1.6896-0.1024-2.56z m-787.4048 5.12c0-45.1072 36.7104-81.8176 81.8176-81.8176h593.152c45.1072 0 81.8176 36.7104 81.8176 81.8176V458.752H136.7552V389.9904zM679.3216 153.6c20.736-6.912 42.8032-5.1712 62.2592 4.7616 19.4048 9.9328 33.6896 26.9312 40.2432 47.7696l22.3232 71.3728H306.3808L679.3216 153.6z m135.0144 735.1296H216.0128c-43.7248 0-79.2576-35.5328-79.2576-79.2576V489.472h756.7872v320.0512c0.0512 43.6736-35.5328 79.2064-79.2064 79.2064z" fill="#333333" p-id="30053"></path><path d="M425.5232 749.4656H258.3552c-8.4992 0-15.36 6.8608-15.36 15.36s6.8608 15.36 15.36 15.36h167.168c8.4992 0 15.36-6.8608 15.36-15.36s-6.8608-15.36-15.36-15.36z" fill="#333333" p-id="30054"></path><path d="M502.4768 398.848h-24.5248c-8.4992 0-15.36-6.8608-15.36-15.36s6.8608-15.36 15.36-15.36h24.5248c8.4992 0 15.36 6.8608 15.36 15.36s-6.912 15.36-15.36 15.36z" fill="#FFFFFF" p-id="30055"></path><path d="M420.5056 398.848H220.7744c-8.4992 0-15.36-6.8608-15.36-15.36s6.8608-15.36 15.36-15.36h199.7312c8.4992 0 15.36 6.8608 15.36 15.36s-6.8608 15.36-15.36 15.36z" fill="#FFFFFF" p-id="30056"></path>
          </svg>
        </el-tooltip>
        <el-tooltip class="item" effect="light" content="添加笔记" placement="bottom-start">
          <svg @click="showAddNoteDialog" t="1684919912792" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="53407" width="48" height="48"><path d="M662.4256 937.8816H209.5616c-65.6896 0-118.9376-53.248-118.9376-118.9376V206.592c0-65.6896 53.248-118.9376 118.9376-118.9376h344.1152l227.6352 225.2288v506.0608c0.0512 65.6896-53.1968 118.9376-118.8864 118.9376z" fill="#F2942F" p-id="53408"></path><path d="M178.0224 903.7312h452.864c65.6896 0 118.9376-53.248 118.9376-118.9376V281.6512l-196.096-193.9968H209.5616c-65.6896 0-118.9376 53.248-118.9376 118.9376v612.352c0 22.7328 6.4 43.9296 17.408 62.0032a118.6816 118.6816 0 0 0 69.9904 22.784z" fill="#FAB001" p-id="53409"></path><path d="M556.4416 100.1472H217.8048c-64.6144 0-117.0432 52.3776-117.0432 117.0432v602.5728c0 13.6192 2.3552 26.6752 6.6048 38.8096 16.5888 8.96 35.5328 14.08 55.7056 14.08h445.6448c64.6144 0 117.0432-52.3776 117.0432-117.0432v-487.936l-169.3184-167.5264z" fill="#F7BD2D" p-id="53410"></path><path d="M555.776 121.8048h-325.12c-62.0544 0-112.384 50.3296-112.384 112.384v578.56c0 6.0416 0.512 11.9296 1.3824 17.7152 11.4688 3.9424 23.7056 6.0928 36.5056 6.0928h427.8784c62.0544 0 112.384-50.3296 112.384-112.384V260.9152l-140.6464-139.1104z" fill="#FCD430" p-id="53411"></path><path d="M622.5408 883.5072l-95.3344 51.2c-15.2576 8.192-33.6896-3.1232-33.28-20.4288l2.4064-104.9088c0.256-10.7008 3.1744-21.1456 8.5504-30.4128l303.1552-525.1072a22.00576 22.00576 0 0 1 30.0544-8.0384l103.7824 59.904a22.00576 22.00576 0 0 1 8.0384 30.0544L647.68 859.2896a64.93696 64.93696 0 0 1-25.1392 24.2176z" fill="#39AFDA" p-id="53412"></path><path d="M926.2592 320.0512c2.2528-3.8912 3.1232-8.1408 2.816-12.288a5.376 5.376 0 0 0-2.6624-4.4032l-91.1872-52.6336c-10.496-6.0928-23.9616-2.4576-30.0544 8.0384L504.832 778.9056a63.56992 63.56992 0 0 0-8.5504 30.4128l-2.4064 104.9088c0.9216 0.9728 1.4848 1.536 2.4064 2.5088 3.3792-0.1024 6.8096-0.9216 10.0864-2.6624l95.3344-51.2a64 64 0 0 0 25.088-24.32l299.4688-518.5024z" fill="#9CE4F3" p-id="53413"></path><path d="M613.7856 856.8832L549.632 890.88c-11.4176 8.4992-22.9376 1.2288-20.6336-13.0048l3.4816-66.2016c1.4336-8.8064 4.6592-17.7152 9.4208-25.9584l279.7568-486.4512c5.376-9.3184 15.0016-13.8752 21.504-10.1376l63.9488 36.9152c6.4512 3.7376 7.3728 14.336 1.9456 23.6544l-267.1104 466.0736c-5.2736 9.1136-20.3264 35.2768-28.16 41.1136z" fill="#52C5F8" p-id="53414"></path><path d="M584.4992 346.9312H232.3968c-28.672 0-51.8656-23.2448-51.8656-51.8656 0-28.672 23.2448-51.8656 51.8656-51.8656h352.1024c28.672 0 51.8656 23.2448 51.8656 51.8656 0 28.672-23.2448 51.8656-51.8656 51.8656zM485.7856 581.7856h-253.44c-28.672 0-51.8656-23.2448-51.8656-51.8656 0-28.672 23.2448-51.8656 51.8656-51.8656h253.44c28.672 0 51.8656 23.2448 51.8656 51.8656 0 28.672-23.1936 51.8656-51.8656 51.8656z" fill="#F2942F" p-id="53415"></path><path d="M483.0208 563.5584H231.5264c-23.6032 0-42.752-19.1488-42.752-42.752 0-23.6032 19.1488-42.752 42.752-42.752h251.4944c23.6032 0 42.752 19.1488 42.752 42.752 0 23.6032-19.1488 42.752-42.752 42.752zM579.7888 328.704H231.5264c-23.6032 0-42.752-19.1488-42.752-42.752 0-23.6032 19.1488-42.752 42.752-42.752h348.2624c23.6032 0 42.752 19.1488 42.752 42.752 0 23.6032-19.1488 42.752-42.752 42.752z" fill="#9CE4F3" p-id="53416"></path><path d="M574.72 312.2688H223.2832c-19.0464 0-34.5088-15.4624-34.5088-34.5088s15.4624-34.5088 34.5088-34.5088h351.4368c19.0464 0 34.5088 15.4624 34.5088 34.5088 0.0512 19.0464-15.4112 34.5088-34.5088 34.5088zM481.1264 547.1232H223.488c-19.0464 0-34.5088-15.4624-34.5088-34.5088s15.4624-34.5088 34.5088-34.5088h257.5872c19.0464 0 34.5088 15.4624 34.5088 34.5088 0.0512 19.0464-15.4112 34.5088-34.4576 34.5088z" fill="#FFFFFF" p-id="53417"></path>
          </svg>
        </el-tooltip>
        <el-tooltip class="item" effect="light" content="添加笔记本" placement="bottom-start">
          <svg @click="showAddNoteBookDialog" t="1684919954386" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="53715" width="48" height="48"><path d="M0 0h1024v1024H0V0z" fill="#202425" opacity=".01" p-id="53716"></path><path d="M136.533333 256H102.4a51.2 51.2 0 1 1 0-102.4h35.157333A136.533333 136.533333 0 0 1 273.066667 34.133333h273.066666a136.533333 136.533333 0 0 1 136.533334 136.533334v682.666666a136.533333 136.533333 0 0 1-136.533334 136.533334H273.066667a136.533333 136.533333 0 0 1-135.4752-119.466667H102.4a51.2 51.2 0 0 1 0-102.4h34.133333v-102.4H102.4a51.2 51.2 0 0 1 0-102.4h34.133333v-102.4H102.4a51.2 51.2 0 0 1 0-102.4h34.133333v-102.4z" fill="#FFAA44" p-id="53717"></path><path d="M273.066667 34.133333h546.133333a136.533333 136.533333 0 0 1 136.533333 136.533334v682.666666a136.533333 136.533333 0 0 1-136.533333 136.533334H273.066667V34.133333z" fill="#FF7744" p-id="53718"></path><path d="M392.533333 307.2A51.2 51.2 0 0 1 443.733333 256h341.333334a51.2 51.2 0 0 1 0 102.4H443.733333A51.2 51.2 0 0 1 392.533333 307.2z m0 204.8a51.2 51.2 0 0 1 51.2-51.2h341.333334a51.2 51.2 0 0 1 0 102.4H443.733333a51.2 51.2 0 0 1-51.2-51.2z m0 204.8a51.2 51.2 0 0 1 51.2-51.2h170.666667a51.2 51.2 0 0 1 0 102.4h-170.666667a51.2 51.2 0 0 1-51.2-51.2z" fill="#FFFFFF" p-id="53719"></path>
          </svg>
        </el-tooltip>
      </div>
      <Search></Search>  
    </div>
    <el-divider content-position="left"><span style="font-size: 14px; color: rgba(0, 0, 0, 0.55)">卡片展示</span></el-divider>
        <!-- 卡片展示 -->
    <el-row :gutter="20">
    <el-col :span="5" v-for="(form) in cardForm" :key="'note-card' + form.card_name"  style="margin-top: 20px;">
      <NoteCardShow :originForm="form" @getAllCard="getAllCard"></NoteCardShow>
    </el-col>
    </el-row>
    <el-divider content-position="left"><span style="font-size: 14px; color: rgba(0, 0, 0, 0.55)">笔记展示</span></el-divider>
    <el-row :gutter="20">
    <el-col :span="4" v-for="(form) in noteForm" :key="'note' + form.note_name"  style="margin-top: 20px;">
      <NoteShow :originForm="form" @getAllNote="getAllNote"></NoteShow>
    </el-col>
    <el-col :span="4" v-for="(form) in noteBookForm" :key="'note-book' + form.noteBook_name"  style="margin-top: 20px;">
      <NoteBookShow :originForm="form" @getAllNoteBook="getAllNoteBook"></NoteBookShow>
    </el-col>
    </el-row>
    <!-- 添加记事卡片 -->
    <el-dialog title="添加记事卡片" :visible.sync="addCardDialogVisible">
      <el-form :model="cardFormInfo">
        <el-form-item label="卡片主题" :label-width="formLabelWidth">
          <el-input placeholder="请输入卡片主题名称" v-model="cardFormInfo.card_name" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="卡片详情" :label-width="formLabelWidth">
          <el-input type="textarea" v-model="cardFormInfo.card_content"></el-input>
        </el-form-item>
        <el-form-item label="卡片分类" :label-width="formLabelWidth">
          <el-tag
            :key="tag"
            v-for="tag in cardFormInfo.card_type"
            closable
            :disable-transitions="false"
            @close="handleCardClose(tag)">
            {{tag}}
          </el-tag>
          <el-input
            class="input-new-tag"
            v-if="inputCardVisible"
            v-model="inputCardValue"
            ref="saveTagInput"
            size="small"
            @keyup.enter.native="handleCardInputConfirm"
            @blur="handleCardInputConfirm"
          >
          </el-input>
          <el-button v-else class="button-new-tag" size="small" @click="showCardInput">+ New Tag</el-button>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="handleCardCancel">取 消</el-button>
        <el-button type="primary" @click="handleAddCard">确 定</el-button>
      </div>
    </el-dialog>
    <!-- 添加笔记 -->
    <el-dialog title="添加笔记" :visible.sync="addNoteDialogVisible">
      <el-form :model="noteFormInfo">
        <el-form-item label="笔记名称" :label-width="formLabelWidth">
          <el-input placeholder="请输入笔记名称" v-model="noteFormInfo.note_name" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="笔记类别" :label-width="formLabelWidth">
          <el-tag
            :key="tag"
            v-for="tag in noteFormInfo.note_type"
            closable
            :disable-transitions="false"
            @close="handleNoteClose(tag)">
            {{tag}}
          </el-tag>
          <el-input
            class="input-new-tag"
            v-if="inputNoteVisible"
            v-model="inputNoteValue"
            ref="saveTagInput"
            size="small"
            @keyup.enter.native="handleNoteInputConfirm"
            @blur="handleNoteInputConfirm"
          >
          </el-input>
          <el-button v-else class="button-new-tag" size="small" @click="showNoteInput">+ New Tag</el-button>
        </el-form-item>
        <el-form-item label="笔记详情" :label-width="formLabelWidth">
          <el-input type="textarea" v-model="noteFormInfo.note_content"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="handleNoteCancel">取 消</el-button>
        <el-button type="primary" @click="handleAddNote">确 定</el-button>
      </div>
    </el-dialog>
    <!-- 添加笔记本 -->
    <el-dialog title="添加笔记本" :visible.sync="addNoteBookDialogVisible">
      <el-form :model="noteBookFormInfo">
        <el-form-item label="笔记本名称" :label-width="formLabelWidth">
          <el-input placeholder="请输入笔记本名称" v-model="noteBookFormInfo.noteBook_name" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="笔记类别" :label-width="formLabelWidth">
          <el-tag
            :key="tag"
            v-for="tag in noteBookFormInfo.noteBook_type"
            closable
            :disable-transitions="false"
            @close="handleNoteBookClose(tag)"
          >
            {{tag}}
          </el-tag>
          <el-input
            class="input-new-tag"
            v-if="inputNoteBookVisible"
            v-model="inputNoteBookValue"
            ref="saveTagInput"
            size="small"
            @keyup.enter.native="handleNoteBookInputConfirm"
            @blur="handleNoteBookInputConfirm"
          >
          </el-input>
          <el-button v-else class="button-new-tag" size="small" @click="showNoteBookInput">+ New Tag</el-button>
        </el-form-item>
        <el-form-item label="笔记本详情" :label-width="formLabelWidth">
          <el-input type="textarea" v-model="noteBookFormInfo.noteBook_content"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="handleNoteBookCancel">取 消</el-button>
        <el-button type="primary" @click="handleAddNoteBook">确 定</el-button>
      </div>
    </el-dialog>
  </div>

</template>

<script>
  import NoteShow from "./NoteShow.vue"
  import NoteCardShow from "./NoteCardShow.vue"
  import NoteBookShow from "./NoteBookShow.vue"
  import Search from '../Search.vue'
  export default {
    name: 'Note',
    components: {
      NoteShow,NoteCardShow,Search,NoteBookShow
    },
    // props:['username'],
    data() {
      return{
        username: sessionStorage.getItem('username'),
        currentFile: '0',
        //笔记的类别
        noteType: ['一单元','二单元'],
        inputNoteVisible: false,
        inputNoteValue: '',
        // 笔记本类别
        noteBookType: ['数学','语文'],
        inputNoteBookVisible: false,
        inputNoteBookValue: '',
        // 卡片类型
        inputCardVisible: false,
        inputCardValue: '',
        // 卡片
        cardForm:[
          // {
          //   name:'事件1',
          //   time:'2023-5-4',
          //   type:['11','22','333'], 
          //   content:'具体事件1XXXXXXXXXXXXXX'
          // },
          // {
          //   name:'事件2', 
          //   type:['11','22','333'],
          //   content:'具体事件2XXXXXXXXXXXXXX',
          //   time:'2023-5-1',
          // },
          // {
          //   name:'事件3', 
          //   type:['11','22','333'],
          //   content:'具体事件3333333333333XXXXXXXXXXXXXX',
          //   time:'2023-5-1',
          // },
          // {
          //   name:'事件4', 
          //   type:['11','22','333'],
          //   content:'具体事件4444444444444444444',
          //   time:'2023-5-1',
          // },
        ],
        // noteName: ['数学笔记','语文笔记','英语笔记'],
        noteForm: [
          // {
          //   category: 2,
          //   name: '数学笔记',
          //   type:['11','22','333'],
          //   content:'XXXXXX',
          //   time:'2023-5-1'
          // },
          // {
          //   category: 2,
          //   name: '语文笔记',
          //   type:['11','22','333'],
          //   content:'XXXXXX',
          //   time:'2023-5-5'
          // },
          // {
          //   category: 2,
          //   name: '英语笔记',
          //   type:['11','22'],
          //   content:'XXXXXX',
          //   time:'2023-5-1'
          // },
        ],
        noteBookForm: [
          // {
          //   category: 1,
          //   name: '数学笔记',
          //   type:['11','22','333'],
          //   content:'XXXXXX',
          //   time:'2023-5-1'
          // },
          // {
          //   category: 1,
          //   name: '语文笔记',
          //   type:['11','22','333'],
          //   content:'XXXXXX',
          //   time:'2023-5-5'
          // },
        ],
        currentform:[],
        formLabelWidth: '120px',
        // 卡片数据
        cardFormInfo: {
          user_name:'',
          card_category: 1,
          card_parent: '',
          card_name: '',
          card_content: '',
          card_type:[],
          card_time: new Date()
        },
        // 笔记数据
        noteFormInfo: {
          user_name:'',
          note_category: 2,
          note_parent: '',
          note_name: '',
          note_type:[],
          note_content: '',
          note_details: '',
          note_time: new Date()
        },
        // 笔记本数据
        noteBookFormInfo: {
          user_name:'',
          noteBook_notebookId:'',
          noteBook_category: 3,
          noteBook_parent: '',
          noteBook_name: '',
          noteBook_type: [],
          noteBook_content: '',
          noteBook_haveType:[],
        },
        // 对话框判断
        addCardDialogVisible: false,
        addNoteDialogVisible: false,
        addNoteBookDialogVisible: false,
      }
    },
    mounted(){
      
      if(sessionStorage.getItem('username')){
        // this.getRootNoteBook()
        this.getAllNote()
        this.getAllCard()
        this.getAllNoteBook()
      }
      
    },
    methods: {
      // 获取文件信息
      // async getNoteBookInfo() {
      //   const res = await fetch('http://localhost:8000/note/viewnoteBook', {
      //     method: 'post',
      //     headers: {
      //       'Content-Type': 'application/json'
      //     },
      //     body: JSON.stringify(),
      //     mode: 'cors'
      //   })
      //   .then(res => res.json())
      //   .catch(e => {
      //     console.log('error', e)
      //   })
      //   if (res?.code === 0) {         
      //     this.noteForm = res.result
      //     console.log(res.result);
      //   }
      // },
      // 记事卡片逻辑
      showAddCardDialog() {
        this.addCardDialogVisible = true
      },
      handleCardCancel() {
        this.addCardDialogVisible = false
      },
      async handleAddCard() {
        // 增加卡片的逻辑
        this.cardFormInfo.user_name = sessionStorage.getItem('username')
        this.cardFormInfo.card_parent = this.currentFile
        this.addCardDialogVisible = false
        console.log(this.cardFormInfo, 123)
        const res = await fetch('http://localhost:8000/note/createNoteCard', {
          method: 'post',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(this.cardFormInfo),
          mode: 'cors'
        })
        .then(res => res.json())
        .catch(e => {
          console.log('error', e)
        })
        if (res?.code === 0) {
          this.getAllCard()
          console.log(res)
          this.cardFormInfo = {
            user_name:'',
            card_category: 1,
            card_parent: '',
            card_name: '',
            card_content: '',
            card_type:[],
            card_time: new Date()
          }
        }
        else{
          console.log("相同名字，重新创建")
        }
      },
      // 卡片类型添加
      handleCardClose(tag) {
        this.cardFormInfo.card_type.splice(this.cardFormInfo.card_type.indexOf(tag), 1);
      },
      showCardInput() {
        this.inputCardVisible = true;
        this.$nextTick(_ => {
          this.$refs.saveTagInput.$refs.input.focus();
        });
      },
      handleCardInputConfirm() {
        let inputValue = this.inputCardValue;
        console.log(this.cardFormInfo.card_type)
        if (inputValue) {
          this.cardFormInfo.card_type.push(inputValue);
        }
        this.inputCardVisible = false;
        this.inputCardValue = '';
      },
      // 笔记
      showAddNoteDialog() {
        this.addNoteDialogVisible = true
      },
      handleNoteCancel() {
        this.addNoteDialogVisible = false
      },
      handleAddNote() {
        // 增加笔记的逻辑
        console.log(this.noteFormInfo)
        this.addNoteDialogVisible = false
      },
      async handleAddNote() {
        // 增加笔记的逻辑
        console.log(sessionStorage.getItem('username'))
        this.noteFormInfo.user_name = sessionStorage.getItem('username')
        this.noteFormInfo.note_parent = this.currentFile
        this.addNoteDialogVisible = false
        console.log(this.noteFormInfo, 123)
        const res = await fetch('http://localhost:8000/note/createNote', {
          method: 'post',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(this.noteFormInfo),
          mode: 'cors'
        })
        .then(res => res.json())
        .catch(e => {
          console.log('error', e)
        })
        if (res?.code === 0) {
          this.getAllNote()
          this.noteFormInfo = {
            user_name:'',
            note_category: 2,
            note_parent: '',
            note_name: '',
            note_type:[],
            note_content: '',
            note_details: '',
            note_time: new Date()
          }
          console.log(res)
        }
        else{
          console.log("相同名字，重新创建")
        }

      },
      // 笔记本
      showAddNoteBookDialog() {
        this.addNoteBookDialogVisible = true
      },
      handleNoteBookCancel() {
        this.addNoteBookDialogVisible = false
      },
      async handleAddNoteBook() {
        // 增加笔记的逻辑
        console.log(sessionStorage.getItem('username'))
        this.noteBookFormInfo.user_name = sessionStorage.getItem('username')
        this.noteBookFormInfo.noteBook_haveType = JSON.stringify(this.noteBookFormInfo.noteBook_haveType)
        this.noteBookFormInfo.noteBook_parent = this.currentFile
        this.addNoteBookDialogVisible = false
        console.log(this.noteBookFormInfo, 123)
        const res = await fetch('http://localhost:8000/note/createNoteBook', {
          method: 'post',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(this.noteBookFormInfo),
          mode: 'cors'
        })
        .then(res => res.json())
        .catch(e => {
          console.log('error', e)
        })
        if (res?.code === 0) {
          this.noteBookFormInfo = {
            user_name:'',
            noteBook_notebookId:'',
            noteBook_category: 3,
            noteBook_parent: '',
            noteBook_name: '',
            noteBook_type: [],
            noteBook_content: '',
            noteBook_haveType: [],
          }
          this.getAllNoteBook()
          console.log(res)
        }
        else{
          console.log("相同名字，重新创建")
        }

      },
      // 笔记类别添加
      handleNoteClose(tag) {
        this.noteFormInfo.note_type.splice(this.noteFormInfo.note_type.indexOf(tag), 1);
      },
      showNoteInput() {
        this.inputNoteVisible = true;
        this.$nextTick(_ => {
          this.$refs.saveTagInput.$refs.input.focus();
        });
      },
      handleNoteInputConfirm() {
        let inputNoteValue = this.inputNoteValue;
        if (inputNoteValue) {
          this.noteFormInfo.note_type.push(inputNoteValue);
        }
        this.inputNoteVisible = false;
        this.inputNoteValue = '';
      },
      // 笔记本类别添加
      handleNoteBookClose(tag) {
        this.noteBookFormInfo.noteBook_type.splice(this.noteBookFormInfo.noteBook_type.indexOf(tag), 1);
      },
      showNoteBookInput() {
        this.inputNoteBookVisible = true;
        this.$nextTick(() => {
          this.$refs.saveTagInput.$refs.input.focus();
        });
      },
      handleNoteBookInputConfirm() {
        let inputNoteBookValue = this.inputNoteBookValue;
        if (inputNoteBookValue) {
          this.noteBookFormInfo.noteBook_type.push(inputNoteBookValue);
        }
        this.inputNoteBookVisible = false;
        this.inputNoteBookValue = '';
      },
      async getRootNoteBook() {
        // 展示根文件信息文件
        const info = {}
        info.noteBook_name = '我的笔记本'
        info.user_name = sessionStorage.getItem('username')
        info.noteBook_parent = 0
        const res = await fetch('http://localhost:8000/note/viewNoteBook', {
          method: 'post',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(info),
          mode: 'cors'
        })
        .then(res => res.json())
        .catch(e => {
          console.log('error', e)
        })
        if (res?.code === 0) {
          console.log('root',res)
          this.currentFile = res.result.id
          this.currentform = res.result

          console.log(res.result)
          this.currentform.noteBook_haveType =  JSON.parse()
        }
        else{
          console.log("查询根文件失败失败")
        }

      },
      async getAllNote() {
        // 展示所有笔记的逻辑
        const info = {}
        info.user_name = sessionStorage.getItem('username')
        info.note_parent = this.currentFile
        console.log(info, 123)
        const res = await fetch('http://localhost:8000/note/AllNote', {
          method: 'post',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(info),
          mode: 'cors'
        })
        .then(res => res.json())
        .catch(e => {
          console.log('error', e)
        })
        if (res?.code === 0) {
          this.noteForm = res.result.map(item => {
            item.note_type = JSON.parse(item.note_type)
            return item
          })
          console.log(this.noteForm)
        }
        else{
          console.log("所有笔记查找失败")
        }
      },
      async getAllCard() {
        // 展示所有卡片
        const info = {}
        info.user_name = sessionStorage.getItem('username')
        info.card_parent = this.currentFile
        console.log(info, 123)
        const res = await fetch('http://localhost:8000/note/AllCard', {
          method: 'post',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(info),
          mode: 'cors'
        })
        .then(res => res.json())
        .catch(e => {
          console.log('error', e)
        })
        if (res?.code === 0) {
          this.cardForm = res.result.map(item => {
            item.card_type = JSON.parse(item.card_type)
            return item
          })
          console.log(this.cardForm, "卡片列表")
        }
        else{
          console.log("所有卡片查找失败")
        }

      },
      async getAllNoteBook() {
        // 展示所有文件
        const info = {}
        info.user_name = sessionStorage.getItem('username')
        info.noteBook_parent = this.currentFile
        console.log(info, 123)
        const res = await fetch('http://localhost:8000/note/AllNoteBook', {
          method: 'post',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(info),
          mode: 'cors'
        })
        .then(res => res.json())
        .catch(e => {
          console.log('error', e)
        })
        if (res?.code === 0) {
          this.noteBookForm = res.result.map(item => {
            item.noteBook_type = JSON.parse(item.noteBook_type)
            return item
          })
          console.log(this.cardForm, "文件列表")
        }
        else{
          console.log("所有文件列表查询失败")
        }

      },
    }
  }
</script>

<style scoped>
  .el-divider__text {
    background: rgba(0, 0, 0, 0);
  }
  .title {
    margin-top: 10px;
    display: flex;
    align-items: center;
    height: 80px;

  }
  .el-tag + .el-tag {
    margin-left: 10px;
  }
  .button-new-tag {
    margin-left: 10px;
    height: 32px;
    line-height: 30px;
    padding-top: 0;
    padding-bottom: 0;
  }
  .input-new-tag {
    width: 90px;
    margin-left: 10px;
    vertical-align: bottom;
  }

  .item {
    margin-left: 80px;
  }
  .search {
    width: 300px;
    margin-left: 400px;
  }
</style>

