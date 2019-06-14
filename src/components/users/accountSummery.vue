<template>
    <div>
        <p>
        Your account
Account settings
marwa's personal information
Your information Edit
Your email {{user.email}} Edit
Saved addresses: 0 View
Language preference: English Edit
Email preferences Update
marwa's payment information
Quick checkout settings: Off Edit
Credit cards saved: 0 Edit
Additional information
GiftCard Check balance
Your information will be collected and handled in accordance with our Privacy Policy.

Status of recent orders
You have no active orders.

View order history and returns

        </p>
    </div>
</template>
<script>
export default {
    computed:
    {
           user()
            {
                
                return this.$store.getters.allUser
            }
    }
}
</script>
