// src/components/GuideModal.tsx

import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

// Define the props the component will accept
interface GuideModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const GuideModal: React.FC<GuideModalProps> = ({ isOpen, onClose }) => {
  const { language } = useLanguage();

  // If the modal isn't open, render nothing
  if (!isOpen) {
    return null;
  }

  return (
    // The main modal container, which includes the dark overlay.
    // Clicking the overlay will close the modal.
    <div 
      id="guide-modal" 
      className="modal" 
      onClick={onClose}
    >
      {/* The content box. We stop the click from bubbling up to the parent,
        so clicking inside the content box doesn't close the modal.
      */}
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        
        {/* The Close Button (x) */}
        <span className="close-btn" onClick={onClose}>&times;</span>
        
        {/* Render English or Arabic text based on the language from your context */}
        {language === 'ar' ? (
          /* --- ARABIC TEXT --- */
          <div className="guide-text" lang="ar" dir="rtl">
            <h2 className="text-2xl font-bold mb-4">مرحبًا بك في دليل البائع! ✨</h2>
            <p className="mb-4">يحتوي هذا الدليل على تعليمات أساسية لمساعدة البائعين على جمع بيانات منتجات نون والتعامل معها بشكل صحيح وبدون عناء.</p>
            
            <h3 className="text-xl font-bold mt-6 mb-2">🔧 كيفية استخدام أداة جمع البيانات</h3>
            <ul className="list-disc list-inside space-y-2 mb-4">
              <li><strong>جمع بيانات هذه الصفحة:</strong> انتقل إلى أي صفحة منتج على نون وانقر على هذا الزر لاستخراج بياناتها على الفور.</li>
              <li><strong>جمع بيانات عناوين URL متعددة:</strong> الصق قائمة بعناوين URL لمنتجات Noon (عنوان واحد في كل سطر) في مربع النص. ستقوم الإضافة بمعالجة جميع العناوين وإنشاء ملف XLSX واحد قابل للتنزيل.</li>
            </ul>

            <h3 className="text-xl font-bold mt-6 mb-2">📤 بعد جمع البيانات: ماذا تفعل</h3>
            <ol className="list-decimal list-inside space-y-2 mb-4">
              <li>بعد جمع البيانات، ستحصل على ورقة Excel قابلة للتنزيل تحتوي على البيانات بالإضافة إلى صيغ الترجمة التلقائية.</li>
              <li>انسخ جميع البيانات (فقط اضغط على <strong>CTRL+V</strong>) والصقها في ورقة Google Sheet فارغة — لا يتطلب لصقًا خاصًا.</li>
              <li>ستقوم Google Sheets بالكشف التلقائي عن صيغ الترجمة وتحويل الحقول العربية/الإنجليزية حسب الحاجة.</li>
              <li>بمجرد الانتهاء، حدد جميع الخلايا والصقها كـ <strong>قيم خام</strong> في ملف <strong>NIS.xlsx</strong> الرئيسي الخاص بك (استخدم <strong>CTRL+SHIFT+V</strong> أو انقر بزر الماوس الأيمن → "لصق القيم فقط").</li>
            </ol>

            <h3 className="text-xl font-bold mt-6 mb-2">📝 ملاحظات</h3>
            <ul className="list-disc list-inside space-y-2">
              <li>يتم تعيين عمود <strong>"العلامة التجارية" (Brand)</strong> دائمًا على <em>(Generic)</em> بشكل افتراضي — يمكنك تغييره يدويًا إذا لزم الأمر.</li>
              <li>لا تحتوي جميع المنتجات على بيانات كاملة. يترك بعض البائعين الحقول الرئيسية فارغة، أو قد تكون القوائم القديمة غير مكتملة.</li>
              <li>صفحات نون ديناميكية. إذا تغير تصميم الموقع، فقد يتم تحديث أهداف جمع البيانات تلقائيًا في الإصدارات المستقبلية.</li>
              <li>إذا حدث خطأ أو كان هناك شيء مفقود، فلا تقلق — التحديثات المنتظمة ستبقي كل شيء يعمل بسلاسة.</li>
            </ul>
            <p className="mt-6 font-semibold">شكرًا لاستخدامك إضافة Noon Scraper! 🙏</p>
          </div>
        ) : (
          /* --- ENGLISH TEXT --- */
          <div className="guide-text" lang="en">
            <h2 className="text-2xl font-bold mb-4">Welcome to the Seller Guide! ✨</h2>
            <p className="mb-4">This guide contains essential instructions to help sellers scrape and handle Noon product data correctly and effortlessly.</p>
            
            <h3 className="text-xl font-bold mt-6 mb-2">🔧 How to Use the Scraper</h3>
            <ul className="list-disc list-inside space-y-2 mb-4">
              <li><strong>Scrape This Page:</strong> Navigate to any Noon product page and click this button to instantly extract its data.</li>
              <li><strong>Scrape Multiple URLs:</strong> Paste a list of Noon product URLs (one per line) into the text box. The extension will process all of them and generate a single downloadable XLSX file.</li>
            </ul>

            <h3 className="text-xl font-bold mt-6 mb-2">📤 After Scraping: What to Do</h3>
            <ol className="list-decimal list-inside space-y-2 mb-4">
              <li>After scraping, you'll get a downloadable Excel sheet containing the data along with automatic translation formulas.</li>
              <li>Copy all the data (just press <strong>CTRL+V</strong>) and paste it into a blank Google Sheet — no special paste required.</li>
              <li>Google Sheets will auto-detect the translation formulas and convert the Arabic/English fields as needed.</li>
              <li>Once you're done, select all cells and paste them as <strong>raw values</strong> into your main <strong>NIS.xlsx</strong> file (Use <strong>CTRL+SHIFT+V</strong> or Right Click → "Paste as values").</li>
            </ol>

            <h3 className="text-xl font-bold mt-6 mb-2">📝 Notes</h3>
            <ul className="list-disc list-inside space-y-2">
              <li>The "Brand" column is always set to <em>Generic</em> by default — you can change it manually if needed.</li>
              <li>Not all products contain full data. Some sellers leave key fields empty, or older listings may be incomplete.</li>
              <li>Noon pages are dynamic. If the site layout changes, scraping targets may update automatically in future versions.</li>
              <li>If something breaks or is missing, don’t worry — regular updates will keep everything running smoothly.</li>
            </ul>
            <p className="mt-6 font-semibold">Thank you for using the Noon Scraper Extension! 🙏</p>
          </div>
        )}
      </div>
    </div>
  );
};
