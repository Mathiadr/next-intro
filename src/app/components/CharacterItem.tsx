export default function CharacterItem({ character }: {character: Character}){
    const {id, name, level, atk, def} = character
    return(
        <tr className="border-b bg-white dark:border-gray-700 dark:bg-gray-800">
            <td className="whitespace-nowrap px-6 py-4 font-medium text-gray-900 dark:text-white">
                {id}
            </td>
            <td className="whitespace-nowrap px-6 py-4 font-medium text-gray-900 dark:text-white">
                {name}
            </td>
            <td className="whitespace-nowrap px-6 py-4 font-medium text-gray-900 dark:text-white">
                {level}
            </td>
            <td className="whitespace-nowrap px-6 py-4 font-medium text-gray-900 dark:text-white">
                {atk}
            </td>
            <td className="whitespace-nowrap px-6 py-4 font-medium text-gray-900 dark:text-white">
                {def}
            </td>
        </tr>
    );
}