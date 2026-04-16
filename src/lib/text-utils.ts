export function cleanTextForSpeech(text: string): string {
  // Remove markdown-style bold asterisks
  return text
    .replace(/\*\*/g, "") // Remove ** used for bold
    .replace(/\*/g, "") // Remove single * for bold
    .replace(/##\s+/g, "") // Remove markdown headings
    .replace(/\n\n/g, " ") // Replace paragraph breaks with space
    .replace(/\n/g, " ") // Replace newlines with space
    .trim();
}

export function cleanTextForDisplay(text: string): string {
  // Remove markdown-style bold asterisks for display
  return text
    .replace(/\*\*(.+?)\*\*/g, "$1") // Convert **text** to text (keep the content)
    .replace(/\*(.+?)\*/g, "$1") // Convert *text* to text (keep the content)
    .trim();
}
