const EmptyList = ({ heading = 'No items' }: { heading?: string }) => {
    return (
        <div className="flex items-center justify-center py-20">
            <div className="text-center">
                <h1 className="text-lg font-light mb-4">{heading}</h1>
            </div>
        </div>
    )
}

export default EmptyList
