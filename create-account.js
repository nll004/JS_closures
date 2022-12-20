function createAccount(pin, amount) {
    let savedPin = pin;
    let balance = Number(amount) || 0;

    return {
        checkBalance(pin){
            if (pin !== savedPin) return 'Invalid PIN.';
            else balance = `$${balance}`;
            return balance;
        },
        deposit(pin, amount){
            if(pin !== savedPin) return 'Invalid PIN.';
            else balance = balance + amount;
            return `Successfully deposited $${amount}. Current balance: $${balance}.`;
        },
        withdraw(pin, amount){
            if(pin !== savedPin) return 'Invalid PIN.';

            if ((balance - amount) < 0) {
                return 'Withdrawal amount exceeds account balance. Transaction cancelled.';
            }
            else balance = balance - amount;

            return `Successfully withdrew $${amount}. Current balance: $${balance}.`;
        },
        changePin(oldPin, newPin){
            if(oldPin !== savedPin) return 'Invalid PIN.';
            else savedPin = newPin;
            return 'PIN successfully changed!';
        };
    };
};

module.exports = { createAccount };
