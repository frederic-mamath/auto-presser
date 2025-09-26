/**
 * Auto-Presser Renderer Process
 * Handles the user interface and interactions
 */

import './index.css';

// Interface configuration state
interface AutoPresserConfig {
  targetKey: string;
  frequency: number;
  toggleHotkey: string;
  isRunning: boolean;
}

// Default configuration
const config: AutoPresserConfig = {
  targetKey: 'Space',
  frequency: 1000,
  toggleHotkey: 'Cmd+Shift+A',
  isRunning: false
};

// DOM elements
const targetKeyInput = document.getElementById('target-key') as HTMLInputElement;
const frequencyInput = document.getElementById('frequency') as HTMLInputElement;
const toggleHotkeyInput = document.getElementById('toggle-hotkey') as HTMLInputElement;
const startStopBtn = document.getElementById('start-stop-btn') as HTMLButtonElement;
const statusText = document.getElementById('status-text') as HTMLSpanElement;
const statusIndicator = document.getElementById('status-indicator') as HTMLDivElement;

// Initialize the interface
function initializeInterface() {
  // Set default values
  targetKeyInput.value = config.targetKey;
  frequencyInput.value = config.frequency.toString();
  toggleHotkeyInput.value = config.toggleHotkey;
  
  // Add event listeners (non-functional for now)
  targetKeyInput.addEventListener('input', handleTargetKeyChange);
  frequencyInput.addEventListener('input', handleFrequencyChange);
  toggleHotkeyInput.addEventListener('click', handleHotkeyClick);
  startStopBtn.addEventListener('click', handleStartStopClick);
  
  // Enable the start button once inputs have default values
  startStopBtn.disabled = false;
  
  console.log('Auto-Presser interface initialized');
}

// Event handlers (placeholders for now)
function handleTargetKeyChange(event: Event) {
  const target = event.target as HTMLInputElement;
  config.targetKey = target.value || 'Space';
  console.log('Target key changed to:', config.targetKey);
}

function handleFrequencyChange(event: Event) {
  const target = event.target as HTMLInputElement;
  const value = parseInt(target.value);
  if (value >= 100 && value <= 10000) {
    config.frequency = value;
    console.log('Frequency changed to:', config.frequency, 'ms');
  }
}

function handleHotkeyClick() {
  console.log('Hotkey recording clicked (not implemented yet)');
  // TODO: Implement hotkey recording
  alert('Hotkey recording not implemented yet');
}

function handleStartStopClick() {
  config.isRunning = !config.isRunning;
  updateUI();
  console.log('Auto-press', config.isRunning ? 'started' : 'stopped');
  
  // TODO: Implement actual auto-pressing functionality
  if (config.isRunning) {
    console.log(`Would start pressing "${config.targetKey}" every ${config.frequency}ms`);
  } else {
    console.log('Would stop auto-pressing');
  }
}

function updateUI() {
  if (config.isRunning) {
    startStopBtn.textContent = 'Stop Auto-Press';
    startStopBtn.className = 'btn btn-danger';
    statusText.textContent = 'Running';
    statusIndicator.className = 'status-dot running';
  } else {
    startStopBtn.textContent = 'Start Auto-Press';
    startStopBtn.className = 'btn btn-primary';
    statusText.textContent = 'Stopped';
    statusIndicator.className = 'status-dot stopped';
  }
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', initializeInterface);

console.log('Auto-Presser renderer loaded');
