export interface BaseComponent {
    render(): void; // Method to render the component content
    get element(): HTMLElement; // Getter to retrieve the root element of the component
    setUpEventListeners?(): void; // Optional method to set up event listeners
    destroy?(): void; // Optional method to clean up resources when the component is no longer needed
}
