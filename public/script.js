let progress = 0;
const totalGoals = 3;
const progressBar = document.getElementById('progress_bar');
const goalStatus = document.getElementById('goal-status');
const set_all_three = document.getElementById('set_all_three');
let completedGoals = 0; // Track the number of completed goals

// Attach event listeners to each goal button
document.getElementById('goal1').addEventListener('click', function() { updateProgress(this); });
document.getElementById('goal2').addEventListener('click', function() { updateProgress(this); });
document.getElementById('goal3').addEventListener('click', function() { updateProgress(this); });

function updateProgress(button) {
    if (!button.disabled) { // Check if the button is not already pressed
        completedGoals++;
        progress += 100 / totalGoals; // Increment progress by one-third
        progressBar.style.width = progress + '%';
        button.disabled = true; // Disable the button after it's clicked to prevent multiple clicks

        progressBar.textContent = `
        ${completedGoals} / ${totalGoals} completed`
        
        
        if(completedGoals!=totalGoals){
            set_all_three.classList.remove('hidden')
        }

        else{
            set_all_three.classList.add('hidden')
            // Showing completion message when all goals are completed
            goalStatus.classList.remove('hidden')
        }
    }    

}