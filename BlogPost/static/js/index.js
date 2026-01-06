// اسکریپت لایک برای فرم افزودن پست
// فقط روی صفحه‌ای اجرا می‌شود که المان‌های مربوطه را داشته باشد

document.addEventListener('DOMContentLoaded', function () {
  const counterDisplay = document.getElementById('counterDisplay');
  const incrementButton = document.getElementById('incrementButton');
  const likeInput = document.getElementById('likeInput'); // input مخفی برای ارسال به بک‌اند

  // اگر این المان‌ها روی صفحه نبودند، کاری نکن (جلوگیری از ارور)
  if (!counterDisplay || !incrementButton || !likeInput) return;

  let count = parseInt(counterDisplay.textContent || '0', 10);

  function incrementCounter(event) {
    // نذار دکمه فرم رو سابمیت کنه
    event.preventDefault();

    count++;
    counterDisplay.textContent = count;
    likeInput.value = count; // مقدار لایک را در input مخفی ست کن
  }

  incrementButton.addEventListener('click', incrementCounter);
});