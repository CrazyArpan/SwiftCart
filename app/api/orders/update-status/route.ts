// app/api/orders/[orderId]/route.ts
import { getAuth } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

export async function GET(
  req: Request,
  { params }: { params: { orderId: string } }
) {
  try {
    const { userId } = getAuth(req);

    if (!userId) {
      return new NextResponse("Unauthorized", { status: 401 });
    }

    // Fetch specific order (replace with your storage solution)
    const order = orders.find(
      order => order.id === params.orderId && order.userId === userId
    );

    if (!order) {
      return new NextResponse("Order not found", { status: 404 });
    }

    return NextResponse.json(order);
  } catch (error) {
    console.error('Error fetching order:', error);
    return new NextResponse("Internal Server Error", { status: 500 });
  }
}

export async function PATCH(
  req: Request,
  { params }: { params: { orderId: string } }
) {
  try {
    const { userId } = auth();

    if (!userId) {
      return new NextResponse("Unauthorized", { status: 401 });
    }

    const body = await req.json();
    const { status } = body;

    // Update order status (replace with your storage solution)
    const orderIndex = orders.findIndex(
      order => order.id === params.orderId && order.userId === userId
    );

    if (orderIndex === -1) {
      return new NextResponse("Order not found", { status: 404 });
    }

    orders[orderIndex] = {
      ...orders[orderIndex],
      status,
      updatedAt: new Date().toISOString()
    };

    return NextResponse.json(orders[orderIndex]);
  } catch (error) {
    console.error('Error updating order:', error);
    return new NextResponse("Internal Server Error", { status: 500 });
  }
}
