const supabaseUrl = 'YOUR_SUPABASE_URL'; // Ganti dengan URL Supabase Anda
const supabaseKey = 'YOUR_SUPABASE_KEY'; // Ganti dengan Public Key Supabase Anda
const supabase = Supabase.createClient(supabaseUrl, supabaseKey);

const { createApp } = Vue;

createApp({
    data() {
        return {
            items: [],
            newItem: {
                description: '',
                quantity: 0,
                unit_price: 0,
                category: 'Material'
            }
        };
    },
    computed: {
        totalCost() {
            return this.items.reduce((total, item) => 
                total + (item.quantity * item.unit_price), 0);
        }
    },
    methods: {
        async fetchItems() {
            const { data, error } = await supabase
                .from('rab_items')
                .select('*');
            if (error) {
                console.error('Error fetching items:', error);
            } else {
                this.items = data;
            }
        },
        async addItem() {
            if (!this.newItem.description || this.newItem.quantity <= 0 || 
                this.newItem.unit_price <= 0) {
                alert('Lengkapi semua field dengan data yang valid!');
                return;
            }

            const { data, error } = await supabase
                .from('rab_items')
                .insert([{
                    description: this.newItem.description,
                    quantity: this.newItem.quantity,
                    unit_price: this.newItem.unit_price,
                    category: this.newItem.category
                }])
                .select();

            if (error) {
                console.error('Error adding item:', error);
            } else {
                this.items.push(data[0]);
                this.newItem = { description: '', quantity: 0, unit_price: 0, category: 'Material' };
            }
        },
        async deleteItem(id) {
            const { error } = await supabase
                .from('rab_items')
                .delete()
                .eq('id', id);

            if (error) {
                console.error('Error deleting item:', error);
            } else {
                this.items = this.items.filter(item => item.id !== id);
            }
        },
        formatCurrency(value) {
            return new Intl.NumberFormat('id-ID', {
                style: 'currency',
                currency: 'IDR'
            }).format(value);
        }
    },
    mounted() {
        this.fetchItems();
    }
}).mount('#app');