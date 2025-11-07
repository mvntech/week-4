const mongoose = require('mongoose');

// define the user schema with validations
const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Name is required'],
        trim: true,
        minlength: [3, 'Name must be at least 3 characters'],
        maxlength: [100, 'Name must be at most 100 characters'], 
    },
    email: {
        type: String,
        required: [true, 'Email is required'],
        unique: true,
        trim: true,
        lowercase: true,
        match: [/.+@.+\..+/, 'Please enter a valid email address']
    },
    age: {
        type: Number,
        min: [0, 'Age must be at least 0'],
        max: [120, 'Age must be 120 or less'],
        default: undefined
    },
    createdAt: {
        type: Date,
        default: Date.now()
    }
});

// instance method: return a friendly display name
UserSchema.methods.getDisplayName = function() {
    return `Hello ${this.name}! your email is ${this.email}`;
}

// instance method: email domain check
UserSchema.methods.hasCompanyEmail = function() {
    return this.email.endsWith(`@${domain}`) || this.email.endsWith(domain);
}

// create a User model
const User = mongoose.model('User', UserSchema);

module.exports = User;