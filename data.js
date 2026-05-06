const products = [
  { id: 'f1', category: 'foundation', name: 'Lumière 琉璃光澤粉底液', price: '$45.00', image: 'images/foundation_1_1778046744474.png', desc: '輕盈水潤的粉底液，提供可堆疊的遮瑕力與透亮的玻璃光澤妝效。富含保濕精華，讓肌膚全天候煥發光彩。' },
  { id: 'f2', category: 'foundation', name: 'Lumière 完美無瑕氣墊粉餅', price: '$52.00', image: 'images/foundation_2_1778046757732.png', desc: '隨身攜帶的氣墊粉餅，具備 SPF 50+ 防曬係數，提供完美的柔焦效果。時尚簡約的設計，非常適合隨時補妝。' },
  { id: 'es1', category: 'eyeshadow', name: '蜜桃櫻花九色眼影盤', price: '$38.00', image: 'images/eyeshadow_1_1778046772609.png', desc: '九色眼影盤，包含溫暖的蜜桃色與大地棕色調，打造百變眼妝。高顯色度與奶油般滑順的質地。' },
  { id: 'es2', category: 'eyeshadow', name: '星塵閃耀單色眼影', price: '$22.00', image: 'images/eyeshadow_2_1778046787807.png', desc: '多維度的亮片眼影，為任何眼妝增添耀眼光芒。持久服貼，零飛粉。' },
  { id: 'el1', category: 'eyeliner', name: '極致精準抗暈眼線液', price: '$18.00', image: 'images/eyeliner_1_1778046837153.png', desc: '超細緻筆尖的極黑眼線液，輕鬆描繪銳利精準的眼線。防水防汗不暈染配方。' },
  { id: 'el2', category: 'eyeliner', name: '絲滑柔順眼線膠筆', price: '$16.00', image: 'images/eyeliner_2_1778046852546.png', desc: '抗暈染眼線膠筆，深焙濃縮咖啡棕色，打造柔和深邃的煙燻妝感。滑順好畫不拉扯眼皮。' },
  { id: 'eb1', category: 'eyebrow', name: '立體塑型雙頭眉筆', price: '$15.00', image: 'images/eyebrow_1_1778046869278.png', desc: '雙頭設計眉筆，包含精細筆芯與柔和眉刷。輕鬆打造自然立體的眉型。' },
  { id: 'eb2', category: 'eyebrow', name: '柔焦雙色眉粉盤', price: '$24.00', image: 'images/eyebrow_2_1778046882971.png', desc: '雙色眉粉盤，可自由調配專屬色調，呈現自然豐盈感。內附迷你斜角眉刷。' },
  { id: 'b1', category: 'blush', name: '雲朵柔霧粉彩腮紅', price: '$26.00', image: 'images/blush_1_1778046910480.png', desc: '柔和的粉彩蜜桃色腮紅，完美融入肌膚，呈現自然無縫的紅潤感。絲滑妝效全天持久。' },
  { id: 'b2', category: 'blush', name: '水光透亮液態腮紅', price: '$28.00', image: 'images/blush_2_1778046927456.png', desc: '高顯色度且易暈染的液態腮紅，滴管設計，呈現柔和粉紅的光澤色調。散發由內而外的健康光澤。' },
  { id: 'l1', category: 'lip', name: '琉光水感唇釉', price: '$20.00', image: 'images/lip_1_1778046946195.png', desc: '持久型唇釉，櫻桃紅潤色澤，帶有水潤高光澤感。保持雙唇水潤並留下美麗染唇效果。' },
  { id: 'l2', category: 'lip', name: '絲絨霧面唇膏', price: '$25.00', image: 'images/lip_2_1778046964576.png', desc: '滑順不拔乾的霧面唇膏，溫暖優雅的珊瑚色調。給予雙唇舒適豐富的色彩包覆。' },
  { id: 'l3', category: 'lip', name: '水潤融光護唇膏', price: '$18.00', image: 'images/lip_3_1778047002901.png', desc: '輕透保濕護唇膏，提供一抹淡淡的柔和粉色與深層保濕。日常妝容的完美選擇。' },
  { id: 'o1', category: 'others', name: '雲朵無痕刷具組', price: '$65.00', image: 'images/other_1_1778047017444.png', desc: '頂級超柔軟人造纖維刷具組，打造無瑕妝容。包含所有必備的化妝刷具。' },
  { id: 'o2', category: 'others', name: '純淨保濕卸妝水', price: '$30.00', image: 'images/other_2_1778047030617.png', desc: '溫和清爽的卸妝水，有效帶走臉部髒汙與彩妝，同時不帶走肌膚水分。' },
  { id: 'o3', category: 'others', name: '水光保濕定妝噴霧', price: '$32.00', image: 'images/other_3_1778047045839.png', desc: '極細緻微粒定妝噴霧，鎖住妝容的同時賦予肌膚煥發健康光澤。清爽且輕盈無負擔。' }
];

const categoryMap = {
  'foundation': '底妝類',
  'eyeshadow': '眼影類',
  'eyeliner': '眼線類',
  'eyebrow': '眉毛類',
  'blush': '頰彩類',
  'lip': '唇彩類',
  'others': '其它類'
};
