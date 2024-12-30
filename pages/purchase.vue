<script setup>

</script>

<template>
    <div>
        <div class="container mt-5">
            <h1 class="text-center mb-4">Buyurtma qilish</h1>
            <form>
                <div class="mb-3">
                    <label for="fullName" class="form-label">Isim</label>
                    <input type="text" class="form-control" id="fullName" placeholder="Ismingizni kiriting" required>
                </div>
                <div class="mb-3">
                    <label for="phone" class="form-label">Telefon raqam</label>
                    <input type="tel" class="form-control" id="phone" placeholder="Telefon raqamingizni kiriting" required>
                </div>
                <div class="mb-3">
                    <label for="address" class="form-label">Manzil</label>
                    <textarea class="form-control" id="address" rows="3" placeholder="Manzilingizni kiriting"
                        required></textarea>
                </div>
                <div class="mb-3 form-check">
                    <input type="checkbox" class="form-check-input" id="agree" required>
                    <label class="form-check-label" for="agree">I agree to the terms and conditions</label>
                </div>
                <button type="submit" class="btn w-100" style="background: #ff7f00; color: #fff;">Buyurtma berish</button>
            </form>
        </div>
    </div>
</template>

<style></style>