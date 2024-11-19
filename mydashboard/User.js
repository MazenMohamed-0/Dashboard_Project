const UserSchema = new mongoose.Schema({
    Avatar: { type: String, required: true }, // URL for the avatar image
    Email: { type: String, required: true, unique: true }, // Unique email address
    User: { type: String, required: true }, // Name of the user
    AccountType: { type: String, enum: ['Personal', 'Business'], required: true }, // Account type
    AddedDate: { type: Date, required: true }, // Date added (will be converted to Date)
    AccountStatus: { type: String, enum: ['Active', 'Inactive'], required: true }, // Account status
    Action: { type: String, required: true } // Action string
});

const UserModel = mongoose.model('userlists', UserSchema);
module.exports = UserModel;
