import os
import json

def generate_folder_files_json(directory, output_file):
    # Initialize an empty list to hold the data
    data = []

    # Check if the provided directory exists
    if not os.path.exists(directory):
        print(f"The directory {directory} does not exist.")
        return

    # Walk through the directory
    for folder_name, subfolders, filenames in os.walk(directory):
        print(f"Visiting {folder_name}")  # Debug print

        # Check if there are files in the current folder
        if filenames:
            print(f"Found files: {filenames}")  # Debug print
        else:
            print("No files found here.")  # Debug print

        # Prepare the JSON object for the current folder
        folder_data = {
            "FileName": os.path.basename(folder_name),
            "images": filenames
        }

        # Append the folder data to the list
        data.append(folder_data)

    # Check if data list is still empty
    if not data:
        print("No data to write to JSON.")
    else:
        # Write the JSON data to the specified output file
        with open(output_file, 'w') as json_file:
            json.dump(data, json_file, indent=4)

        print(f"JSON file has been generated at {output_file}")

# Example usage
directory = "./assets/Library" # Change this to your directory path
output_file = "output.json"
generate_folder_files_json(directory, output_file)
