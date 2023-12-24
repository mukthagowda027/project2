const mongoose=require('mongoose')

const mongouri=process.env.MONGO_URI;

mongoose.connect(mongouri)
.then(()=>{console.log("connected")})
.catch(()=>{console.log("Error in connection")})

const userschema=mongoose.Schema({
  username:{type:String},
    email:{type: String,
           unique: true,
           validate: {
           validator: function (value) {
            
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            return emailRegex.test(value);

          },
          message: 'Invalid email address'
        }},
    
        password: {
            type: String,
            required: true,
            validate: {
              validator: function (value) {
                const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;
                return passwordRegex.test(value);
              },
              message: 'Password must be at least 8 characters and include at least one uppercase letter, one lowercase letter, and one digit'
            }
          },

          orders: [
            {
              type: mongoose.Schema.Types.ObjectId,
              ref: 'Order',
            },
          ],
          role: { type: String, default: 'customer' }, 
          vendorId: { type: mongoose.Schema.Types.ObjectId, ref: 'Vendor' } ,
          cartId: { type: mongoose.Schema.Types.ObjectId, ref: 'Cart' } ,
          buyerId: { type: mongoose.Schema.Types.ObjectId, ref: 'Buyer' } ,
        
         token:{type:String}
})

module.exports=mongoose.model("User",userschema)