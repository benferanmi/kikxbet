import create from 'zustand';

const useOddsStore = create((set) => ({
    selectedOdds: [], // Changed to an array for multiple odds
    setSelectedOdds: (odds) => set({ selectedOdds: odds }), // This can now accept an array of odds
    clearSelectedOdds: () => set({ selectedOdds: [] }), // Clear to an empty array
}));

const useCheckoutStore = create((set) => ({
    oddsForBet: null, // Changed to a single item instead of an array
    numberOfBets: 0,
    addOddsForBet: (item) => set({ oddsForBet: item }), // Set the item directly
    removeOddsForBet: () => set({ oddsForBet: null }), // Clear the item by setting it to null
    clearOddsForBet: () => set({ oddsForBet: null }), // Clear the item to null
    setNumberOfBets: (number) => set({ numberOfBets: number }), // Set the number of bets
    clearNumberOfBets: () => set({ numberOfBets: 0 }), // Clear the number of bets
}));

export { useOddsStore, useCheckoutStore };
