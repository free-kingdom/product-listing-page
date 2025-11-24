import { Card, Skeleton } from "antd";
import { selectProducts } from "../../feats/Products/productsSlice"
import { useAppSelector } from "../../hooks/redux"

function ProductCardSkeleton({ status } : { status: "idle" | "failed" | "loading"}) {
    const active = status === "loading" ? true : false;
    return (
        <Card style={{height: 300}}
            cover={<Skeleton.Image active={active} style={{width: "100%", height: 150}}/>}
            >                         
            <Skeleton active={active} title={false}/>
        </Card>
    )
}

export default function ProductCardsSkeleton({ status } : { status: "idle" | "failed" | "loading"}) {
    const { limit } = useAppSelector(selectProducts);

    return (
        <>
            {Array.from({ length: limit }).map((_, idx) => (
                <ProductCardSkeleton key={idx} status={status} />
            ))}
        </>
    )
}