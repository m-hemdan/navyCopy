export default (value)=>{
    return " CA$ "+new Intl.NumberFormat('en-IN', { maximumSignificantDigits: 3 }).format(value)
}