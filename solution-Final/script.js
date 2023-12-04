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
        // Show the completion message modal
        openCompletionModal();
    }
}

let exerciseDictionary = {
    backSquats: {
        video: "./assets/BackSquat.mp4",
        instructions: [
            `
            Back Squat: \n
            - Start with feet shoulder-width apart, barbell resting on your upper back. \n
            - Keep your chest up and core engaged as you lower your hips back and down. \n
            - Descend until your thighs are parallel to the ground. \n
            - Drive through your heels to stand back up, extending hips and knees.
            `
        ]
    },
    benchPress: {
        video: "./assets/Bench Press.mp4",
        instructions: [
            `
            Bench Press:
            - Lie on your back on a flat bench, eyes under the bar.
            - Grip the bar slightly wider than shoulder-width apart.
            - Lower the bar to your chest, keeping elbows at a 90-degree angle.
            - Press the bar back up to the starting position, arms fully extended.
            `
        ]
    },
    overheadPress: {
        video: "./assets/Overhead Press.mp4",
        instructions: [
            `
            Overhead Press: \n
            Stand with feet hip-width apart, barbell at collarbone level. \n
            - Grip the bar with hands just wider than shoulder-width.\n
            - Press the bar overhead, fully extending arms. \n
            - Keep core tight and avoid arching your back.
            `
        ]
    },

    bentOverRow: {
        video: "./assets/Bent over row.mp4",
        instructions: [
            `
            Bent Over Row:
            Stand with feet shoulder-width apart, holding a barbell or dumbbells in front of you.
            Hinge at your hips, keeping your back straight and chest up.
            Pull the weight toward your lower chest, squeezing your shoulder blades together.
            Lower the weight back down with control.
            `
        ]
    },

    plank: {
        video: "./assets/Plank.mp4",
        instructions: [
            `
            Plank: 
            Start in a push-up position with arms straight and shoulders over wrists.
            Engage your core, keeping your body in a straight line from head to heels.
            Hold the position, avoiding sagging hips or raised buttocks.
            Aim to maintain a strong plank form for the desired duration.
            `
        ]
    }
};


// Get the exercise list element and video element

const videoElement = document.getElementById('videoElement');
const descriptionList = document.getElementById('descriptionList'); 

// Add click event listener to the exercise list items
exerciseList.addEventListener('click', function (event) {
    const selectedElement = event.target;

    // Check if the selected element is a checkbox or has the data-video attribute
    if (selectedElement.tagName === 'INPUT' || selectedElement.tagName === 'LABEL' && selectedElement.dataset.video) {
        const videoKey = selectedElement.dataset.video;

        if (exerciseDictionary.hasOwnProperty(videoKey)) {
            const exercise = exerciseDictionary[videoKey]; // Store the exercise object
            // Show the video element
            videoElement.style.display = 'block';
            descriptionList.style.display = 'block';

             // Set the video source and play it
            videoElement.src = exercise.video;
            videoElement.load();
            videoElement.play();

            // Update the description with the workout instructions
            descriptionList.innerHTML = exercise.instructions.map(instruction => `<li>${instruction}</li>`).join('');
        }
    }
});
