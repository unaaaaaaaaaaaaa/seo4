const products = [
  { id: 'f1', category: 'foundation', name: 'Lumière Glass Foundation', price: '$45.00', image: 'images/foundation_1_1778046744474.png', desc: 'A lightweight liquid foundation providing buildable coverage and a dewy glass-skin finish. Formulated with hydrating essence to keep your skin glowing all day.' },
  { id: 'f2', category: 'foundation', name: 'Lumière Perfecting Cushion', price: '$52.00', image: 'images/foundation_2_1778046757732.png', desc: 'On-the-go cushion foundation with SPF 50+, offering a flawless blurring effect. Its sleek design makes it perfect for quick touch-ups.' },
  { id: 'es1', category: 'eyeshadow', name: 'Peach Blossom Palette', price: '$38.00', image: 'images/eyeshadow_1_1778046772609.png', desc: 'A 9-pan palette featuring warm peach and earthy brown tones for versatile eye looks. High pigmentation and buttery smooth texture.' },
  { id: 'es2', category: 'eyeshadow', name: 'Stardust Glitter Pot', price: '$22.00', image: 'images/eyeshadow_2_1778046787807.png', desc: 'A multi-dimensional glitter pot that adds dazzling sparkle to any eye makeup. Long-lasting and zero fallout.' },
  { id: 'el1', category: 'eyeliner', name: 'Precision Liquid Eyeliner', price: '$18.00', image: 'images/eyeliner_1_1778046837153.png', desc: 'Ultra-fine liquid eyeliner pen in intense black for sharp, precise wings. Waterproof and smudge-proof formula.' },
  { id: 'el2', category: 'eyeliner', name: 'Creamy Gel Liner', price: '$16.00', image: 'images/eyeliner_2_1778046852546.png', desc: 'Smudge-proof gel pencil eyeliner in dark espresso brown for a softer, smoky look. Glides on effortlessly.' },
  { id: 'eb1', category: 'eyebrow', name: 'Sculpt & Define Brow Pencil', price: '$15.00', image: 'images/eyebrow_1_1778046869278.png', desc: 'Dual-ended eyebrow pencil with a precision tip and blending spoolie. Achieve naturally defined brows with ease.' },
  { id: 'eb2', category: 'eyebrow', name: 'Soft Focus Brow Powder', price: '$24.00', image: 'images/eyebrow_2_1778046882971.png', desc: 'Two-tone brow powder palette for customized color matching and natural fullness. Comes with a mini angled brush.' },
  { id: 'b1', category: 'blush', name: 'Cloud Paint Powder Blush', price: '$26.00', image: 'images/blush_1_1778046910480.png', desc: 'Soft pastel peach blush that melts into the skin for a natural, seamless flush. Silky finish that lasts all day.' },
  { id: 'b2', category: 'blush', name: 'Dewy Liquid Blush', price: '$28.00', image: 'images/blush_2_1778046927456.png', desc: 'A highly pigmented, blendable liquid blush dropping a soft pink, glossy hue. Gives a healthy, from-within glow.' },
  { id: 'l1', category: 'lip', name: 'Glass Water Tint', price: '$20.00', image: 'images/lip_1_1778046946195.png', desc: 'A long-lasting lip tint in cherry red with a juicy, high-shine finish. Keeps lips hydrated and stained beautifully.' },
  { id: 'l2', category: 'lip', name: 'Velvet Matte Lipstick', price: '$25.00', image: 'images/lip_2_1778046964576.png', desc: 'A smooth, non-drying matte lipstick in a warm, elegant coral shade. Comfortably coats lips in rich color.' },
  { id: 'l3', category: 'lip', name: 'Glow Melting Balm', price: '$18.00', image: 'images/lip_3_1778047002901.png', desc: 'A sheer, moisturizing lip balm providing a hint of soft pink color and intense hydration. Perfect for everyday wear.' },
  { id: 'o1', category: 'others', name: 'Cloud Brush Set', price: '$65.00', image: 'images/other_1_1778047017444.png', desc: 'A premium set of ultra-soft synthetic brushes for flawless makeup application. Includes all essential tools.' },
  { id: 'o2', category: 'others', name: 'Pure Micellar Cleanser', price: '$30.00', image: 'images/other_2_1778047030617.png', desc: 'A gentle, refreshing makeup remover that effectively lifts away impurities without stripping the skin of moisture.' },
  { id: 'o3', category: 'others', name: 'Dewy Setting Spray', price: '$32.00', image: 'images/other_3_1778047045839.png', desc: 'A fine mist setting spray that locks in makeup while imparting a radiant, healthy glow. Refreshing and lightweight.' }
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
