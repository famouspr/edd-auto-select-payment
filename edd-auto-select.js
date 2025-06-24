<script>
  document.addEventListener("DOMContentLoaded", function () {
    setTimeout(function () {
      const pageText = document.body.innerText.toLowerCase();
      const elitePresent = pageText.includes('elite');

      if (elitePresent) {
        const firstOption = document.querySelector('input[name="payment-mode"]');
        if (firstOption && !firstOption.checked) {
          firstOption.checked = true;
          firstOption.dispatchEvent(new Event('change', { bubbles: true }));
        }
      }
    }, 2000); // 2000ms = 2 seconds
  });
</script>
