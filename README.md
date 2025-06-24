# 🧩 EDD Auto-Select First Payment Method (with Conditional Check)

**Easy Digital Downloads (EDD)** sometimes doesn't automatically select a payment method during checkout — especially if you have multiple gateways enabled. This script fixes that by auto-selecting the first payment method radio button.

## ✅ Features

- ⏱️ 2-second delay after page load (lets EDD render completely)
- 🔍 Checks if the page contains the word `"elite"` (e.g., for elite plans)
- 🎯 Automatically selects the first available payment method if condition is met
- 🔄 Triggers native `change` event to simulate real user interaction

## 📦 Use Case

Useful when:
- You have plans like “Elite Membership”
- Users get stuck at checkout with no payment method pre-selected
- You're using custom gateways or modified EDD templates

## 🚀 How to Use

1. Copy the contents of `edd-auto-select.js`.
2. Add it to your theme:
   - Inline in `footer.php`, **or**
   - Enqueue via `functions.php`:
     ```php
     function edd_auto_select_script() {
       ?>
       <script>
       // Paste script here
       </script>
       <?php
     }
     add_action('wp_footer', 'edd_auto_select_script');
     ```
3. Done!

## 🧪 Notes

- You can modify the `elite` condition to match your specific product name.
- Adjust the delay (`2000ms`) if your checkout is heavily JS-dependent.
