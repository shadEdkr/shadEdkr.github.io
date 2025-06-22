document.addEventListener('DOMContentLoaded', () => {
    const symptomsTrigger = document.getElementById('symptoms-trigger');
    const symptomsTriggerText = symptomsTrigger.querySelector('span');
    const symptomsModal = document.getElementById('symptoms-modal');
    const closeModal = document.querySelector('.close-modal');
    const clearSelection = document.querySelector('.clear-selection');
    const symptomSearch = document.getElementById('symptom-search');
    const symptomsList = document.querySelector('.symptoms-list');
    const checkboxes = symptomsList.querySelectorAll('input[type="checkbox"]');
    const consciousnessButtons = document.querySelectorAll('.consciousness-btn');
    
    const ageRangeSelect = document.getElementById('age-range');
    const genderSelect = document.getElementById('gender');
    const pupilsSelect = document.getElementById('pupils');
    const skinConditionSelect = document.getElementById('skin-condition');
    const nextButton = document.querySelector('.btn-next');

    const checkFormCompletion = () => {
        const ageSelected = ageRangeSelect.value !== '';
        const genderSelected = genderSelect.value !== '';
        const symptomsSelected = symptomsTriggerText.textContent !== 'Primary Symptom(s)';
        const consciousnessSelected = document.querySelector('.consciousness-btn.active') !== null;
        const pupilsSelected = pupilsSelect.value !== '';
        const skinConditionSelected = skinConditionSelect.value !== '';

        if (ageSelected && genderSelected && symptomsSelected && consciousnessSelected && pupilsSelected && skinConditionSelected) {
            nextButton.disabled = false;
        } else {
            nextButton.disabled = true;
        }
    };

    const updateSymptomsText = () => {
        const selectedSymptoms = Array.from(checkboxes)
            .filter(cb => cb.checked)
            .map(cb => cb.value);
        
        if (selectedSymptoms.length > 0) {
            symptomsTriggerText.textContent = selectedSymptoms.join(', ');
        } else {
            symptomsTriggerText.textContent = 'Primary Symptom(s)';
        }
    };

    symptomsTrigger.addEventListener('click', () => {
        symptomsModal.style.display = 'flex';
    });

    const hideModal = () => {
        symptomsModal.style.display = 'none';
        updateSymptomsText();
        checkFormCompletion();
    };

    closeModal.addEventListener('click', hideModal);

    symptomsModal.addEventListener('click', (e) => {
        if (e.target === symptomsModal) {
            hideModal();
        }
    });

    clearSelection.addEventListener('click', () => {
        checkboxes.forEach(checkbox => {
            checkbox.checked = false;
        });
    });

    symptomSearch.addEventListener('input', (e) => {
        const searchTerm = e.target.value.toLowerCase();
        const labels = symptomsList.getElementsByTagName('label');

        Array.from(labels).forEach(label => {
            const labelText = label.textContent.toLowerCase();
            if (labelText.includes(searchTerm)) {
                label.style.display = '';
            } else {
                label.style.display = 'none';
            }
        });
    });

    consciousnessButtons.forEach(button => {
        button.addEventListener('click', () => {
            consciousnessButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
            checkFormCompletion();
        });
    });

    [ageRangeSelect, genderSelect, pupilsSelect, skinConditionSelect].forEach(select => {
        select.addEventListener('change', checkFormCompletion);
    });

    nextButton.addEventListener('click', () => {
        if (!nextButton.disabled) {
            const patientData = {
                age: ageRangeSelect.value,
                gender: genderSelect.value,
                symptoms: symptomsTriggerText.textContent,
                consciousness: document.querySelector('.consciousness-btn.active').textContent,
                pupils: pupilsSelect.value,
                skinCondition: skinConditionSelect.value,
            };
            localStorage.setItem('patientDataPt1', JSON.stringify(patientData));
            window.location.href = 'patient-details-2.html';
        }
    });

    checkFormCompletion();
}); 