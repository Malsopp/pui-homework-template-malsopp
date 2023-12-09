// Get all list items in the exerciseList
const exerciseList = document.getElementById('exerciseList');
const listItems = exerciseList.querySelectorAll('li');

// Iterate through each list item and add a checkbox
listItems.forEach((item, index) => {
    const checkboxId = `checkbox${index + 1}`;
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.id = checkboxId;

    const label = document.createElement('label');
    label.htmlFor = checkboxId;
    label.dataset.video = item.dataset.video; // Copy data-video attribute

    // Move existing content from the list item to the label
    while (item.firstChild) {
        label.appendChild(item.firstChild);
    }

    // Append the checkbox and label to the list item
    item.appendChild(checkbox);
    item.appendChild(label);

    // Add an event listener to each checkbox
    checkbox.addEventListener('change', function (event) {
        // Call the checkCompletion function when any checkbox changes
        checkCompletion();
        
        // If the checkbox is checked, display the video
        if (checkbox.checked) {
            const videoKey = label.dataset.video;
            if (exerciseDictionary.hasOwnProperty(videoKey)) {
                const exercise = exerciseDictionary[videoKey];
                videoElement.style.display = 'block';
                descriptionList.style.display = 'block';
                videoElement.src = exercise.video;
                videoElement.load();
                videoElement.play();
                descriptionList.innerHTML = exercise.instructions.map(instruction => `<li>${instruction}</li>`).join('');
            }
        } else {
            // If the checkbox is unchecked, hide the video and description
            videoElement.style.display = 'none';
            descriptionList.style.display = 'none';
        }
    });
});

// Function to open the completion modal
function openCompletionModal() {
    const completionModal = document.getElementById('completionModal');
    completionModal.style.display = 'block';
}

// Function to close the completion modal
function closeCompletionModal() {
    const completionModal = document.getElementById('completionModal');
    completionModal.style.display = 'none';
}

// Function to check completion
function checkCompletion() {
    const checkboxes = document.querySelectorAll('input[type="checkbox"]');
    const allChecked = Array.from(checkboxes).every(checkbox => checkbox.checked);
    if (allChecked) {
      // Show the completion modal after 5 seconds (adjust the time as needed)
        setTimeout(() => {
            openCompletionModal();
            }, 7000); // 7000 milliseconds = 7 seconds
    }
}


// Get the exercise list element and video element

const videoElement = document.getElementById('videoElement');
const descriptionList = document.getElementById('descriptionList'); 

listItems.forEach(listItems => {
    const checkbox = listItems.querySelector('input[type="checkbox"]');
    checkbox.addEventListener('change', function () {
        if (checkbox.checked) {
            const videoKey = listItems.dataset.video;
            
            if (exerciseDictionary.hasOwnProperty(videoKey)) {
                const exercise = exerciseDictionary[videoKey];
                videoElement.style.display = 'block';
                descriptionList.style.display = 'block';
                videoElement.src = exercise.video;
                videoElement.load();
                videoElement.play();
                descriptionList.innerHTML = exercise.instructions.map(instruction => `<li>${instruction}</li>`).join('');

                // Open the workout modal
                openWorkoutModal();
            }
        } else {
            // Handle the case when the checkbox is unchecked (if needed)
        }
    });
});


// Function to open the workout modal
function openWorkoutModal() {
    const workoutModal = document.getElementById('workoutModal');
    const modalContent = document.querySelector('#workoutModal .modal-content');
    workoutModal.style.display = 'block';
    modalContent.style.display = 'block';  // Add this line
}
