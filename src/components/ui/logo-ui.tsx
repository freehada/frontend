import Text from "@/components/ui/text-ui";
import clsx from "clsx";

interface Props {
    className?: string;
}

export default function Logo({ className }: Props) {

    return (
        <Text variant="sticking" className={clsx("text-center", className)}>
            Freehada<span className="text-primary-yellow">.</span>
        </Text>
    )
}